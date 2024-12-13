"use client";

import { Button } from "@common/components/Button";
import firestore from "@common/firebase/firestore";
import { DevlogPostFormData, DevlogPostSchema } from "@domains/devlog";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { remark } from "remark";
import html from "remark-html";

export default function CreateDevlogPostPage() {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<DevlogPostFormData>({
    resolver: zodResolver(DevlogPostSchema),
    // defaultValues: { date: Date.now(), category: "카테고리 없음", title: "this is title", contents: "" },
    defaultValues: { contents: "" },
  });

  const [markdown, setMarkdown] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");

  // const handleInputChange = async (e: any) => {
  //   const inputText = e.target.value;
  //   setMarkdown(inputText);

  //   // 마크다운을 HTML로 변환
  //   const processedHtml = await remark().use(html).process(inputText);
  //   setHtmlContent(processedHtml.toString());
  // };

  const handleInputChange = async (value: string) => {
    // 마크다운을 HTML로 변환
    const processedHtml = await remark().use(html).process(value);
    setHtmlContent(processedHtml.toString());
  };

  const onClickSubmit = async () => {
    console.log(getValues("contents"));
    console.log(htmlContent);
    // await addDoc(collection(firestore, "devlog"), {
    //   date: Date.now(),
    //   category: "Next.js",
    //   title: "Next.js & Firebase 테스트",
    //   contents: "Next.js & Firebase 테스트 01",
    // });
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onClickSubmit)}>
      <div className="flex flex-row gap-1">
        <Controller
          control={control}
          name="contents"
          render={({ field }) => (
            <textarea
              {...field} // React Hook Form의 필드 연결
              className="min-h-[400px] w-[50%] border"
              onChange={(e) => {
                field.onChange(e.target.value); // React Hook Form 업데이트
                handleInputChange(e.target.value); // HTML 변환
              }}
              placeholder="Enter Markdown here..."
            />
          )}
        />
        <div className="prose flex-grow border" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <div className="fle-row flex justify-end">
        <div>
          <Button type="submit" color="point" size="medium" style="outline">
            <Button.Text>등록하기</Button.Text>
          </Button>
        </div>
      </div>
    </form>
  );
}
