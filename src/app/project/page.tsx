import dayjs from "dayjs";
import CalendarIcon from "@icons/calendar.svg";

export default function Project() {
  return (
    <div className="grid w-full grid-cols-4 gap-2">
      <div
        className="shadow-card_shadow w-full cursor-pointer rounded-[4px] bg-white"
        // onClick={() => push(`${PATH.DEVLOG.MAIN}/${id}`)}
      >
        <div className="h-[200px] w-full rounded-tl-[4px] rounded-tr-[4px] bg-gray05" />
        <div className="flex h-[140px] flex-col justify-between p-4">
          <div className="flex flex-col gap-2">
            <p className="line-clamp-1 text-subtitle_bold_18 text-gray12">프로젝트</p>
            <p className="line-clamp-2 text-subtitle_medium_14 text-gray08">프로젝트에 대한 설명입니다.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <CalendarIcon width={12} height={12} className="h-3 w-3 text-gray08" />
            {/* <p className="text-body_medium_12 text-gray08">{dayjs(updatedAt ?? createdAt).format("YYYY년 MM월 DD일")}</p> */}
            <p className="text-body_medium_12 text-gray08">YYYY년 MM월 DD일</p>
          </div>
        </div>
      </div>
    </div>
  );
}
