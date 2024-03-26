import Navbar from "@/components/Navbar";
import SWRConfigContext from "@/context/SWRConfigContext";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CONFIG, GOOGLEFRONTCLOUND } from "@/libs/configs";
import FooterNav from "@/components/FooterNav";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: CONFIG.metadata.title,
  description: CONFIG.metadata.description,
  openGraph: {
    images: [
      {
        url: `${GOOGLEFRONTCLOUND}/${CONFIG.metadata.image}`,
        width: 800, // 이미지의 너비를 지정하세요
        height: 600, // 이미지의 높이를 지정하세요
        alt: CONFIG.metadata.title, // 대체 텍스트를 지정하세요
      },
    ],
  },
};

// TODO: 구글 api 연결
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`max-w-screen-sm  mx-auto  ${openSans.className}`}
      lang="en"
    >
      <Head>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <body className="w-full">
        <header className="w-full sticky top-0 bg-white z-40 border-b">
          <Navbar />
        </header>
        <main>
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
        <div id="portal" />
        <FooterNav />
        <Analytics />
      </body>
    </html>
  );
}
