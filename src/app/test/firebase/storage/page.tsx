"use client";

import { NextPage } from "next";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import firestore from "@/common/firebase/firestore";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "@/common/firebase/storage";
import Image from "next/image";

const FirebaseStorage: NextPage = () => {
  const [titlename, setTitleName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inputImage, setInputImage] = useState<File | null>(null);
  const [list, setList] = useState<any[]>([]);

  const onClickUploadB = async () => {
    // 버튼 클릭 시 스토리지에 이미지 업로드 및 파이어스토어에 데이터 등록
    const uploadFileName = uuid() + ".png";
    console.log(uploadFileName);

    if (!inputImage) return;

    try {
      const imageRef = ref(storage, `images/${uploadFileName}`);
      await uploadBytes(imageRef, inputImage);

      await addDoc(collection(firestore, `auth`), {
        titlename,
        name,
        uploadFileName,
      });

      setTitleName("");
      setName("");
      setInputImage(null);
    } catch (error) {
      console.error("Error uploading file and saving data: ", error);
    }
  };

  useEffect(() => {
    // onSnapshot을 이용하여 실시간으로 게시판 글 정보 가져오기
    const snap = onSnapshot(collection(firestore, "auth"), (querySnapshot) => {
      const tempList: any[] = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        tempList.push(data);
      });
      setList(tempList);
    });

    // Cleanup the onSnapshot listener when the component unmounts
    return () => snap();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between border p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="flex flex-row gap-4"
        >
          <label>제목</label>
          <input
            value={titlename}
            className="border"
            onChange={(event) => {
              setTitleName(event.target.value);
            }}
          />
          <label>작성자 이름</label>
          <input
            value={name}
            className="border"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>이미지 파일</label>
          <input
            type="file"
            className="border"
            onChange={(event) => {
              setInputImage(event.target.files ? event.target.files[0] : null);
            }}
          />
        </form>
        <button className="cursor-pointer border bg-black px-4 text-white" onClick={onClickUploadB}>
          업로드
        </button>
      </div>

      <div className="flex-grid flex gap-4 bg-gray-50">
        {list.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 border bg-white p-4">
            <p>
              <span className="text-lg">{item.titlename}</span>
              <span> ( By {item.name})</span>
            </p>
            <Post imagename={item.uploadFileName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirebaseStorage;

function Post({ imagename }: { imagename: string }) {
  const [imgurl, setImgurl] = useState<string | null>(null);

  useEffect(() => {
    const func = async () => {
      if (imagename) {
        try {
          const reference = ref(storage, `images/${imagename}`);
          const url = await getDownloadURL(reference);
          setImgurl(url);
        } catch (error) {
          console.error("Error fetching image URL: ", error);
        }
      }
    };
    func();
  }, [imagename]);

  return (
    imgurl && (
      <Image
        className="border bg-white p-4"
        unoptimized={true}
        alt="uploaded image"
        width={300}
        height={150}
        src={imgurl}
      />
    )
  );
}
