"use client";

import { NextPage } from "next";
import { collection, addDoc } from "firebase/firestore";
import firestore from "@/common/firebase/firestore";

const FirebaseDatabase: NextPage = () => {
  const onClickUpLoadButton = async () => {
    await addDoc(collection(firestore, "post"), {
      date: Date.now(),
      category: "Next.js",
      title: "Next.js & Firebase 테스트",
      contents: "Next.js & Firebase 테스트 내용입니다.",
    });
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="mb-6 text-display_bold_24">Firebase Database</h1>
      <button className="rounded-[8px] bg-gray11 px-10 py-1 text-white" onClick={onClickUpLoadButton}>
        Click
      </button>
    </div>
  );
};

export default FirebaseDatabase;
