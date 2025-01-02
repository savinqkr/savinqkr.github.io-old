"use client";

import { MeatballMenu } from "@common/components";
import PATH from "@constants/path";
import { useRouter } from "next/navigation";

const PostDetailMenus: React.FC<{ slug: string }> = ({ slug }) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-row gap-2">
      <MeatballMenu
        menus={[
          {
            name: "수정하기",
            onClick: () => {
              push(`${PATH.DEVLOG.MAIN}/${slug}/edit`);
            },
          },
          {
            name: "삭제하기",
            onClick: () => {
              console.log("삭제");
            },
          },
        ]}
      />
    </div>
  );
};

export default PostDetailMenus;
