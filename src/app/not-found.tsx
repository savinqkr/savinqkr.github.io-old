import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 py-[100px]">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-display_bold_48 text-gray08">404</h1>
        <p className="text-body_medium_16 text-gray08 pc:text-body_medium_18">Page Not Found</p>
      </div>
      <Link
        href="/"
        className="rounded-[8px] bg-point px-4 py-2 text-subtitle_medium_14 text-white pc:text-subtitle_medium_16"
      >
        Return Home
      </Link>
    </div>
  );
}
