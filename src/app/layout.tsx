import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@common/components";

const pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "savinqkr",
  description: "savinqkr 의 Github Blog 입니다.",
  openGraph: {
    title: "savinqkr",
    description: "savinqkr 의 Github Blog 입니다.",
    siteName: "savinqkr",
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
    title: "savinqkr",
    description: "savinqkr 의 Github Blog",
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
      <body className={`${pretendard.variable} font-pretendard`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
