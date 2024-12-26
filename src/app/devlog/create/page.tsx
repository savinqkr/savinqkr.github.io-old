"use client";

import { FormErrorMessage, FormTextInput } from "@common/components";
import { Button } from "@common/components/Button";
import { Editor } from "@common/components/Editor";
import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import PATH from "@constants/path";
import { DevlogPostFormData, DevlogPostSchema } from "@domains/devlog";
import { OutputData } from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { remark } from "remark";
import html from "remark-html";

export default function CreateDevlogPostPage() {
  const { push } = useRouter();

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<DevlogPostFormData>({
    resolver: zodResolver(DevlogPostSchema),
    // defaultValues: { date: Date.now(), category: "카테고리 없음", title: "this is title", contents: "" },
    defaultValues: { category: "", title: "", contents: "" },
  });

  // REMARK
  // const [htmlContent, setHtmlContent] = useState<string>("");
  // const handleInputChange = async (value: string) => {
  //   const processedHtml = await remark().use(html).process(value);
  //   setHtmlContent(processedHtml.toString());
  // };

  // EDITOR.JS
  // const [editorData, setEditorData] = useState<OutputData>({ blocks: [] });

  const onClickSubmit = async () => {
    // const result = await addDoc(collection(firestore, DATABASE.DEVLOG), {
    //   createdAt: Date.now(),
    //   category: getValues("category"),
    //   title: getValues("title"),
    //   contents: getValues("contents"),
    // });
    // if (!!result.id) {
    //   push(`${PATH.DEVLOG.MAIN}/${result.id}`);
    // }
    console.log(" =============== SUBMIT =============== ");
    console.log(getValues("contents"));
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onClickSubmit)}>
      {/* <div className="flex flex-col gap-1">
        <FormTextInput control={control} name="category" type="text" placeholder="카테고리" />
        <FormErrorMessage error={errors.category} />
      </div> */}
      <div className="flex flex-col gap-1">
        <FormTextInput control={control} name="title" type="text" placeholder="제목" />
        <FormErrorMessage error={errors.title} />
      </div>
      <Controller
        control={control}
        name="contents"
        render={({ field }) => (
          <Editor
            {...field}
            holder="editorjs"
            // data={editorData}
            onChange={(data: OutputData) => {
              field.onChange(JSON.stringify(data)); // React Hook Form 업데이트
            }}
          />
        )}
      />

      {/* <div className="grid min-h-[70vh] grid-cols-2 gap-2">
        <Controller
          control={control}
          name="contents"
          render={({ field }) => (
            // <textarea
            //   {...field} // React Hook Form의 필드 연결
            //   className="h-full w-full resize-none rounded-[8px] border border-gray07 p-4"
            //   onChange={(e) => {
            //     field.onChange(e.target.value); // React Hook Form 업데이트
            //     handleInputChange(e.target.value); // HTML 변환
            //   }}
            //   placeholder="Enter Markdown here..."
            // />

          )}
        />
        <div
          className="prose h-full rounded-[8px] border border-gray07 p-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div> */}
      <div className="fle-row flex justify-end">
        <div className="fle-row flex gap-4">
          <Button type="submit" color="point" size="medium" style="outline">
            <Button.Text>임시 저장</Button.Text>
          </Button>
          <Button type="submit" color="point" size="medium" style="outline">
            <Button.Text>등록하기</Button.Text>
          </Button>
        </div>
      </div>
    </form>
  );
}
