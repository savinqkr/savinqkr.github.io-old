import Link from "next/link";
import PATH from "@constants/path";
import RocketIcon from "@icons/rocket.svg";

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-row items-center justify-center bg-white px-4 shadow-x0_y4_b4_0.05">
      <div className="flex h-[80px] w-full max-w-[1060px] flex-col items-start justify-center gap-2 pc:flex-row pc:items-center pc:justify-between">
        <div className="flex flex-row items-center gap-2">
          <RocketIcon width={20} height={20} className="h-4 w-4 pc:h-5 pc:w-5" />
          <Link href={PATH.MAIN} className="text-subtitle_bold_16 text-gray11 pc:text-subtitle_bold_18">
            SAVINQKR
          </Link>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Link href={PATH.DEVLOG.MAIN} className="text-subtitle_medium_14 text-gray08 pc:text-subtitle_medium_16">
            <span>Devlog</span>
          </Link>
          <Link href={PATH.PROJECT.MAIN} className="text-subtitle_medium_14 text-gray08 pc:text-subtitle_medium_16">
            <span>Projects</span>
          </Link>
          {/* <Link href={PATH.ABOUT.MAIN} className="text-gray08 text-subtitle_medium_14 pc:text-subtitle_medium_16">
            <span>About</span>
          </Link> */}
          <Link
            href={PATH.GITHUB}
            target="_black"
            className="text-subtitle_medium_14 text-gray08 pc:text-subtitle_medium_16"
          >
            <span>Github</span>
          </Link>
          <Link
            href={PATH.TISTORY}
            target="_black"
            className="text-subtitle_medium_14 text-gray08 pc:text-subtitle_medium_16"
          >
            <span>Tistory</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
