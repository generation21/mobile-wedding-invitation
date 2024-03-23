import Navbar from "@/components/Navbar";
import SWRConfigContext from "@/context/SWRConfigContext";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/libs/configs";
import FooterNav from "@/components/FooterNav";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: CONFIG.metadata.title,
  description: CONFIG.metadata.description,
};

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
      </body>
    </html>
  );
}
