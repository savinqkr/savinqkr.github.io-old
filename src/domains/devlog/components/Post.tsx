"use client";

import PATH from "@constants/path";
import CalendarIcon from "@icons/calendar.svg";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
export interface PostProps {
  id: string;
  title: string;
  contents: string;
  category?: string;
  thumbnail?: string;
  createdAt?: number;
  updatedAt?: number;
}

const Post: React.FC<PostProps> = ({ id, title, contents, thumbnail, createdAt, updatedAt }) => {
  const { push } = useRouter();

  return (
    <div
      className="w-full cursor-pointer rounded-[4px] bg-white shadow-x0_y2_b2_0.1"
      onClick={() => push(`${PATH.DEVLOG.MAIN}/${id}`)}
    >
      <div className="h-[160px] w-full rounded-tl-[4px] rounded-tr-[4px] bg-gray05" />
      <div className="flex h-[140px] flex-col justify-between p-4">
        <div className="flex flex-col gap-2">
          <p className="line-clamp-1 text-subtitle_bold_14 text-gray12">{title}</p>
          <p className="line-clamp-2 text-body_medium_12 text-gray10">{contents}</p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <CalendarIcon width={12} height={12} className="h-3 w-3 text-gray08" />
          <p className="text-body_medium_12 text-gray08">{dayjs(updatedAt ?? createdAt).format("YYYY년 MM월 DD일")}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
