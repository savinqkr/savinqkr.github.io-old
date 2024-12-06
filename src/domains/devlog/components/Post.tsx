"use client";

interface PostProps {
  id: string;
  title: string;
  contents: string;
  thumbnail?: string;
  createdAt?: string;
  updatedAt?: string;
}

const Post: React.FC<PostProps> = ({ id, title, contents, thumbnail, createdAt, updatedAt }) => {
  return (
    <div className="shadow-x0_y2_b2_0.1 w-full cursor-pointer rounded-[4px] bg-white" onClick={() => console.log(id)}>
      <div className="h-[160px] w-full rounded-tl-[4px] rounded-tr-[4px] bg-gray05" />
      <div className="flex h-[140px] flex-col justify-between p-4">
        <div className="flex flex-col gap-2">
          <p className="line-clamp-1 text-subtitle_bold_14 text-gray12">{title}</p>
          <p className="line-clamp-2 text-body_medium_12 text-gray10">{contents}</p>
        </div>
        <p className="text-body_medium_12 text-gray08">2024년 12월 24일</p>
      </div>
    </div>
  );
};

export default Post;
