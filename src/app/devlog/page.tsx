"use client";

import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import { Post } from "@domains/devlog";
import { PostProps } from "@domains/devlog/components/Post";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Devlog() {
  const [list, setList] = useState<PostProps[]>([]);

  useEffect(() => {
    // onSnapshot을 이용하여 실시간으로 게시판 글 정보 가져오기
    const snap = onSnapshot(collection(firestore, DATABASE.DEVLOG), (querySnapshot) => {
      const tempList: any[] = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        tempList.push({ id: doc.id, ...data });
      });

      setList(tempList);
    });

    // Cleanup the onSnapshot listener when the component unmounts
    return () => snap();
  }, []);

  return (
    <div className="grid w-full grid-cols-4 gap-2">
      {list.map((post, idx) => (
        <Post
          key={`${post.title}-${idx}`}
          id={post.id}
          title={post.title}
          contents={post.contents}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
      ))}
    </div>
  );
}
