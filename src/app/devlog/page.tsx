"use client";

import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import { Post } from "@domains/devlog";
import { PostProps } from "@domains/devlog/components/Post";
import { OutputData } from "@editorjs/editorjs";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import FilterIcon from "@icons/filter.svg";

export default function Devlog() {
  const [list, setList] = useState<PostProps[]>([]);

  useEffect(() => {
    // onSnapshot을 이용하여 실시간으로 게시판 글 정보 가져오기
    const snap = onSnapshot(
      collection(firestore, DATABASE.DEVLOG),
      (querySnapshot) => {
        const tempList: any[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          const parsedContents: OutputData = JSON.parse(
            data.contents,
          );
          tempList.push({
            id: doc.id,
            parsedContents,
            ...data,
          });
        });

        setList(tempList);
      },
    );

    // Cleanup the onSnapshot listener when the component unmounts
    return () => snap();
  }, []);

  return (
    <div className="flex flex-col gap-8 pc:flex-row">
      {/* <div className="grid w-full grid-cols-4 gap-2"> */}
      <div className="order-2 flex w-full flex-1 flex-col gap-4 pc:order-1">
        {/* <div className="flex w-full flex-row items-center justify-between gap-3">
          <FilterIcon width={20} height={20} className="h-[20px] w-[20px] text-gray12" />
          <input type="text" className="rounded-[8px] border border-gray06 px-2 py-1" />
        </div> */}
        <div className="flex flex-col gap-3">
          {list.map(
            (
              {
                id,
                title,
                description,
                category,
                contents,
                parsedContents,
                createdAt,
                updatedAt,
              },
              idx,
            ) => (
              <Post
                key={`${title}-${idx}`}
                id={id}
                title={title}
                description={description}
                category={category}
                contents={contents}
                parsedContents={parsedContents}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            ),
          )}
        </div>
      </div>
      <div className="order-1 flex w-full flex-col gap-3 p-4 pc:order-2 pc:w-[200px] pc:p-0">
        <p className="text-body_bold_16 italic text-gray10">
          Recent Logs
        </p>
        <div className="flex flex-col gap-2">
          <p
            className="line-clamp-1 cursor-pointer text-body_medium_14 text-gray08 hover:text-point hover:underline"
            style={{ textUnderlineOffset: "6px" }}
          >
            게시글 테스트 (1)
          </p>
          <p
            className="line-clamp-1 cursor-pointer text-body_medium_14 text-gray08 hover:text-point hover:underline"
            style={{ textUnderlineOffset: "6px" }}
          >
            게시글 테스트 (2)
          </p>
          <p
            className="line-clamp-1 cursor-pointer text-body_medium_14 text-gray08 hover:text-point hover:underline"
            style={{ textUnderlineOffset: "6px" }}
          >
            게시글 테스트 (3)
          </p>
          <p
            className="line-clamp-1 cursor-pointer text-body_medium_14 text-gray08 hover:text-point hover:underline"
            style={{ textUnderlineOffset: "6px" }}
          >
            게시글 테스트 (4)
          </p>
          <p
            className="line-clamp-1 cursor-pointer text-body_medium_14 text-gray08 hover:text-point hover:underline"
            style={{ textUnderlineOffset: "6px" }}
          >
            게시글 테스트 (5)
          </p>
        </div>
      </div>
    </div>
  );
}
