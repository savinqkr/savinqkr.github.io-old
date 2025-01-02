"use client";

import { useForm } from "react-hook-form";
import { FormErrorMessage, FormTextInput } from "@common/components";
import { Button } from "@common/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import PATH from "@constants/path";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { setToken } from "@redux/token.reducer";
import { LoginFormData, LoginSchema } from "@domains/admin";
import { loginEmail } from "@common/firebase/authentication";

export default function Admin() {
  const { push } = useRouter();
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  // 로그인
  const dispatch: AppDispatch = useDispatch();

  const onClickSignIn = async () => {
    try {
      const result: UserCredential = await loginEmail(getValues("email"), getValues("password"));
      const accessToken = await result.user.getIdToken();

      if (accessToken) {
        dispatch(setToken({ accessToken }));
        push(PATH.MAIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full w-full max-w-[400px] flex-col items-center gap-[80px] py-6">
      <h1 className="flex w-full justify-center border-b-2 border-gray06 pb-4 text-subtitle_bold_20 text-gray11 pc:text-display_bold_24">
        ADMIN
      </h1>
      <form onSubmit={handleSubmit(onClickSignIn)} className="flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-subtitle_bold_14 text-gray11 pc:text-subtitle_bold_16">이메일</p>
            <div className="flex flex-col gap-1">
              <FormTextInput control={control} name="email" type="text" placeholder="이메일 주소를 입력해 주세요." />
              <FormErrorMessage error={errors.email} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-subtitle_bold_14 text-gray11 pc:text-subtitle_bold_16">비밀번호</p>
            <div className="flex flex-col gap-1">
              <FormTextInput
                control={control}
                name="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요."
              />
              <FormErrorMessage error={errors.password} />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <Button type="submit" color="point" size="large" style="filled">
            <Button.Text>로그인</Button.Text>
          </Button>
        </div>
      </form>
    </div>
  );
}
