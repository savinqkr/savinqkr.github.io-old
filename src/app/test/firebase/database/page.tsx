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
      contents: "Next.js & Firebase 테스트 01",
    });
  };

  return (
    <div>
      <h1 className="text-lg">Firebase Database</h1>
      <button className="border" onClick={onClickUpLoadButton}>
        Click
      </button>
    </div>
  );
};

export default FirebaseDatabase;
