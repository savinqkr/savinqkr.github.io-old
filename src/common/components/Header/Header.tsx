"use client";

import Link from "next/link";
import PATH from "@constants/path";
import RocketIcon from "@icons/rocket.svg";
import SearchIcon from "@icons/search.svg";
import LogoutIcon from "@icons/log_out.svg";
import SunIcon from "@icons/sun.svg";
import MoonIcon from "@icons/moon.svg";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { resetAdmin } from "@redux/admin.reducer";
import { resetToken } from "@redux/token.reducer";

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tokenState = useSelector((state: RootState) => state.token);

  return (
    <header className="shadow-header_shadow z-[999] flex w-full flex-row items-center justify-center bg-white px-4">
      <div className="flex h-[80px] w-full max-w-[1060px] flex-col items-start justify-center gap-2 pc:flex-row pc:items-center pc:justify-between">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <RocketIcon width={20} height={20} className="h-4 w-4 pc:h-5 pc:w-5" />
            <Link href={PATH.MAIN} className="text-subtitle_bold_16 text-gray11 pc:text-subtitle_bold_18">
              SAVINQKR
            </Link>
          </div>

          <div onClick={() => console.log("POPUP")} className="cursor-pointer">
            <SearchIcon width={20} height={20} className="h-5 w-5 cursor-pointer text-gray12 pc:hidden" />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-between pc:w-auto pc:gap-4">
          <div className="flex flex-row items-center gap-4">
            <Menu name="Devlog" href={PATH.DEVLOG.MAIN} />
            <Menu name="Projects" href={PATH.PROJECT.MAIN} />
            <Menu name="Resume" href={PATH.RESUME.MAIN} />
            <Menu name="Github" href={PATH.GITHUB} isExternal />
          </div>
          <div className="gap- flex flex-row items-center gap-2">
            <div
              onClick={() => console.log("POPUP")}
              className="hidden w-[160px] cursor-pointer flex-row items-center justify-between rounded-[8px] border border-gray05 bg-gray02 px-2 py-1 hover:bg-gray05 pc:flex"
            >
              <p className="px-2 text-body_medium_14 text-gray08">Search ...</p>
              <div className="whitespace-nowrap rounded-[4px] border border-gray05 bg-white px-2 text-body_medium_12 text-gray10">
                ⌘ K
              </div>
            </div>

            <div className="flex flex-row items-center gap-1">
              {/* <div className="h-full rounded-[8px] p-2 hover:bg-gray02">
                <SunIcon width={20} height={20} className="text-notice h-5 w-5" />
                <MoonIcon width={20} height={20} className="h-5 w-5 text-gray12" />
              </div> */}
              {!!tokenState.accessToken && (
                <div
                  onClick={() => dispatch(resetToken({}))}
                  className="h-full cursor-pointer rounded-[8px] p-2 hover:bg-gray02"
                >
                  <LogoutIcon width={20} height={20} className="h-5 w-5 text-point" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
