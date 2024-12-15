import firestore from "@common/firebase/firestore";
import { DATABASE } from "@constants";
import { PostProps } from "@domains/devlog/components/Post";
import dayjs from "dayjs";
import { doc, getDoc } from "firebase/firestore";
import CalendarIcon from "@icons/calendar.svg";
import BookmarkIcon from "@icons/bookmark.svg";
import MeatballIcon from "@icons/meatball.svg";

export default async function DevlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const docRef = doc(firestore, DATABASE.DEVLOG, slug);
  const docSnap = await getDoc(docRef);

  let post: PostProps | null = null;

  if (docSnap.exists()) {
    post = { id: docSnap.id, ...docSnap.data() } as PostProps;
  }

  return (
    <div>
      {post ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-display_bold_32">{post.title}</h1>
            <button className="cursor-pointer">
              <MeatballIcon width={24} height={24} className="h-6 w-6 text-gray10" />
            </button>
          </div>
          <div className="flex flex-col gap-2 rounded-[8px] bg-gray02 p-2">
            <div className="flex flex-row items-center justify-start gap-5 text-gray10">
              <BookmarkIcon width={16} height={16} className="h-4 w-4" />
              <p>{post.category}</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-5 text-gray10">
              <CalendarIcon width={16} height={16} className="h-4 w-4" />
              <p>{dayjs(post.createdAt ?? post.updatedAt).format("YYYY년 MM월 DD일")}</p>
            </div>
          </div>
          <div className="prose min-h-[50vh]" dangerouslySetInnerHTML={{ __html: post.contents }} />
        </div>
      ) : (
        <p>게시글을 불러오는 중입니다...</p>
      )}
    </div>
  );
}
