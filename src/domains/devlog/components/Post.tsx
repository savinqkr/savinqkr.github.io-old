"use client";

import PATH from "@constants/path";
import { OutputData } from "@editorjs/editorjs";
import CalendarIcon from "@icons/calendar.svg";
import BookMarkIcon from "@icons/bookmark.svg";
import FolderIcon from "@icons/folder.svg";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
export interface PostProps {
  id: string;
  title: string;
  contents: string;
  parsedContents: OutputData;
  description?: string;
  category?: string;
  thumbnail?: string;
  createdAt?: number;
  updatedAt?: number;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  category,
  contents,
  parsedContents,
  thumbnail,
  createdAt,
  updatedAt,
}) => {
  const { push } = useRouter();

  return (
    <div
      className="shadow-card_shadow flex w-full cursor-pointer flex-col gap-4 rounded-[12px] border border-gray02 px-5 py-3"
      onClick={() => push(`${PATH.DEVLOG.MAIN}/${id}`)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1">
          <FolderIcon width={14} height={14} className="h-[14px] w-[14px] text-gray08" />
          <p className="text-body_medium_14 text-gray08">{category}</p>
        </div>
        <p className="line-clamp-1 text-body_bold_18 text-point">{title}</p>
        <p className="line-clamp-2 text-body_medium_14 text-gray10">{description}</p>
      </div>
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <p className="rounded-[20px] bg-gray03 px-3 py-[2px] text-body_medium_12 text-gray08"># 태그</p>
          </div>
        </div>
        <p className="text-body_medium_14 text-gray08">{dayjs(updatedAt ?? createdAt).format("YYYY.MM.DD")}</p>
      </div>
    </div>
  );
};

export default Post;
