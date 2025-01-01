"use client";

import { Button } from "@common/components/Button";
import { Editor } from "@common/components/Editor";
import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import { DevlogPostFormData, DevlogPostSchema } from "@domains/devlog";
import { PostProps } from "@domains/devlog/components/Post";
import { OutputData } from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function EditDevlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // React.use()로 Promise를 언래핑
  const { push } = useRouter();

  const {
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<DevlogPostFormData>({
    resolver: zodResolver(DevlogPostSchema),
    defaultValues: { isDraft: false, category: "카테고리 없음", title: "", description: "", contents: "" },
  });

  const [contents, setContents] = useState<OutputData>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(firestore, DATABASE.DEVLOG, slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const parsedContents: OutputData = JSON.parse(docSnap.data().contents);
          const post = { id: docSnap.id, parsedContents, ...docSnap.data() } as PostProps;

          setValue("title", post.title);
          if (post.category) setValue("category", post.category);
          if (post.description) setValue("description", post.description);
          setContents(post.parsedContents);
        }
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  const onClickSubmit = async () => {};

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
            data={contents}
            holder={`edit-post-${slug}`}
            onChange={(data: OutputData) => field.onChange(JSON.stringify(data))}
          />
        )}
      />

      <div className="fle-row flex justify-end">
        <div className="fle-row flex gap-4">
          <Button type="submit" color="point" size="medium" style="outline">
            <Button.Text>수정하기</Button.Text>
          </Button>
        </div>
      </div>
    </form>
  );
}
