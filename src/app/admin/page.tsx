"use client";

import { FormErrorMessage, FormTextInput } from "@common/components";
import { Button } from "@common/components/Button";
import { LoginFormData, LoginSchema } from "@domains/devlog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Admin() {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleLoginSubmit = () => {
    console.log(getValues("email"));
  };

  return (
    <div className="pc:shadow-x0_y2_b2_0.1 flex h-full w-full flex-col items-center justify-between bg-white p-4 py-10 pc:h-auto pc:min-h-[480px] pc:w-[400px] pc:rounded-[8px]">
      <h1 className="border text-subtitle_bold_18 text-gray12">관리자 로그인</h1>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="relative flex w-full flex-grow flex-col border">
        <div className="flex flex-col gap-1">
          <FormTextInput control={control} name="email" type="text" placeholder="이메일 주소를 입력해 주세요." />
          <FormErrorMessage error={errors.email} />
        </div>
        <div className="flex flex-col gap-1">
          <FormTextInput control={control} name="password" type="password" placeholder="비밀번호를 입력해 주세요." />
          <FormErrorMessage error={errors.password} />
        </div>
        <Button type="submit" color="point" size="medium" style="filled">
          <Button.Text>로그인</Button.Text>
        </Button>
      </form>
    </div>
  );
}
