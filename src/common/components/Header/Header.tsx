"use client";

import Link from "next/link";
import PATH from "@constants/path";
import RocketIcon from "@icons/rocket.svg";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { resetAdmin } from "@redux/admin.reducer";
import { Button } from "../Button";
import { resetToken } from "@redux/token.reducer";

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tokenState = useSelector((state: RootState) => state.token);

  return (
    <header className="z-[999] flex w-full flex-row items-center justify-center bg-white px-4 shadow-x0_y4_b4_0.05">
      <div className="flex h-[80px] w-full max-w-[1060px] flex-col items-start justify-center gap-2 pc:flex-row pc:items-center pc:justify-between">
        <div className="flex flex-row items-center gap-2">
          <RocketIcon width={20} height={20} className="h-4 w-4 pc:h-5 pc:w-5" />
          <Link href={PATH.MAIN} className="text-subtitle_bold_16 text-gray11 pc:text-subtitle_bold_18">
            SAVINQKR
          </Link>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Menu name="Devlog" href={PATH.DEVLOG.MAIN} />
          <Menu name="Projects" href={PATH.PROJECT.MAIN} />
          <Menu name="Github" href={PATH.GITHUB} isExternal />
          <Menu name="Tistory" href={PATH.TISTORY} isExternal />
          {!!tokenState.accessToken && (
            <Button type="button" color="point" size="small" style="outline" onClick={() => dispatch(resetToken({}))}>
              <Button.Text>LOGOUT</Button.Text>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
