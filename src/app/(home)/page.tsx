"use client";

import { Button } from "@common/components/Button";
import PATH from "@constants/path";
import { RootState } from "@redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const { push } = useRouter();
  const admin = useSelector((state: RootState) => state.admin);
  const tokenState = useSelector((state: RootState) => state.token);

  return (
    <div className="grid w-full grid-cols-4 gap-2">
      EMAIL : {admin.email ?? "-"}
      {!!tokenState.accessToken && (
        <Button type="button" color="point" size="medium" style="outline" onClick={() => push(PATH.DEVLOG.CREATE)}>
          <Button.Text>새 글 작성하기</Button.Text>
        </Button>
      )}
    </div>
  );
}
