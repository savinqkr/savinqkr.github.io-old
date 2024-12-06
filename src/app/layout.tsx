import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@common/components";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "SAVINQKR",
  description: "SAVINQKR 의 Github Blog 입니다.",
  openGraph: {
    title: "SAVINQKR",
    description: "SAVINQKR 의 Github Blog 입니다.",
    siteName: "SAVINQKR",
    locale: "ko_KR",
    url: "",
    images: [
      {
        url: "",
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "SAVINQKR",
    description: "SAVINQKR 의 Github Blog",
    images: {
      url: "",
      alt: "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} flex min-h-[100vh] flex-col font-pretendard`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
