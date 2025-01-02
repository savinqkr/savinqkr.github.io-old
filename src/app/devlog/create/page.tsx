"use client";

import { Button } from "@common/components/Button";
import { Editor } from "@common/components/Editor";
import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import PATH from "@constants/path";
import { DevlogPostFormData, DevlogPostSchema } from "@domains/devlog";
import { OutputData } from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function CreateDevlogPostPage() {
  const { push } = useRouter();

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<DevlogPostFormData>({
    resolver: zodResolver(DevlogPostSchema),
    defaultValues: { isDraft: false, category: "카테고리 없음", title: "", description: "", contents: "" },
  });

  // REMARK
  // const [htmlContent, setHtmlContent] = useState<string>("");
  // const handleInputChange = async (value: string) => {
  //   const processedHtml = await remark().use(html).process(value);
  //   setHtmlContent(processedHtml.toString());
  // };

  const onClickSubmit = async () => {
    const result = await addDoc(collection(firestore, DATABASE.DEVLOG), {
      category: getValues("category"),
      title: getValues("title"),
      description: getValues("description"),
      contents: getValues("contents"),
      isDraft: false,
      createdAt: Date.now(),
    });
    if (!!result.id) {
      push(`${PATH.DEVLOG.MAIN}/${result.id}`);
    }
  };

  // DRAFT COUNT
  const onClickSaveDraft = async () => {
    const result = await addDoc(collection(firestore, DATABASE.DEVLOG), {
      category: getValues("category"),
      title: getValues("title"),
      description: getValues("description"),
      contents: getValues("contents"),
      isDraft: true,
      draftSavedAt: Date.now(),
    });
    if (!!result.id) {
      alert("임시저장 완료");
    }
  };

  const [draftCnt, setDraftCnt] = useState<number>(0);
  useEffect(() => {
    const fetchDraftCount = async () => {
      try {
        const draftRef = collection(firestore, DATABASE.DEVLOG);
        const q = query(draftRef, where("isDraft", "==", true));
        const draftSnap = await getDocs(q);
        setDraftCnt(draftSnap.size);
      } catch (error) {
        console.error("Error fetching draft count:", error);
      }
    };
    fetchDraftCount();
  }, [onClickSaveDraft]);

  return (
    <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit(onClickSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="제목"
            onChange={(event) => field.onChange(event.target.value)}
            className="text-display_bold_32 text-gray12"
            autoComplete="off"
          />
        )}
      />
      <div className="flex w-full flex-col gap-3 border-b border-t border-gray06 py-4">
        <div className="flex flex-row items-center">
          <p className="w-[100px] text-subtitle_medium_16 text-gray10">소개</p>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="이 글에 대하여..."
                onChange={(event) => field.onChange(event.target.value)}
                className="flex-1 text-body_medium_16 text-gray12"
                autoComplete="off"
              />
            )}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="w-[100px] text-subtitle_medium_16 text-gray10">태그</p>
        </div>
      </div>
      <Controller
        control={control}
        name="contents"
        render={({ field }) => (
          <Editor
            {...field}
            holder="create-post"
            onChange={(data: OutputData) => field.onChange(JSON.stringify(data))}
          />
        )}
      />

      <div className="fle-row flex justify-end">
        <div className="fle-row flex gap-4">
          <Button type="button" color="point" size="medium" style="outline" onClick={onClickSaveDraft}>
            <Button.Text>임시 저장 | {draftCnt}</Button.Text>
          </Button>
          <Button type="submit" color="point" size="medium" style="outline">
            <Button.Text>등록하기</Button.Text>
          </Button>
        </div>
      </div>
    </form>
  );
}
