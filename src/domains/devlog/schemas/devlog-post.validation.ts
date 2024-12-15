import * as z from "zod";

export const DevlogPostSchema = z.object({
  category: z.string().default("카테고리 없음"),
  title: z.string({
    required_error: "글 제목을 입력해주세요.",
  }),
  //   .min(5, "제목을 최소 5자 이상 입력해주세요."),
  // contents: z
  //   .string({
  //     required_error: "글 내용을 입력해주세요.",
  //   })
  //   .min(1, "글 내용을 입력해주세요."),
  contents: z.string().optional(),
});

export type DevlogPostFormData = z.infer<typeof DevlogPostSchema>;
