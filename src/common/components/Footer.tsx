import PATH from "@constants/path";
import Link from "next/link";
import GmailIcon from "@icons/gmail.svg";
import GithubIcon from "@icons/github.svg";
import LinkedInIcon from "@icons/linkedin.svg";
import SettingIcon from "@icons/setting.svg";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-5 border-t border-gray06 bg-gray02 py-[60px]">
      <div className="flex flex-row justify-center gap-2">
        <GmailIcon width={24} height={24} className="h-6 w-6 text-gray10" />
        <Link href={PATH.GITHUB} target="_blank">
          <GithubIcon width={24} height={24} className="h-6 w-6 text-gray10" />
        </Link>
        <Link href={PATH.LINKEDIN} target="_blank">
          <LinkedInIcon width={24} height={24} className="h-6 w-6 text-gray10" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-body_medium_14 text-gray10">Copyright © 2024 SAVINQKR</p>
        <Link href={PATH.ADMIN.MAIN} className="flex flex-row items-center gap-1 text-body_medium_12 text-gray08">
          <SettingIcon width={12} height={12} className="h-3 w-3" />
          <span>관리자</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
