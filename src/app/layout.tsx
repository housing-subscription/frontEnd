import "./globals.css";

import type { Metadata } from "next";

import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

export const metadata: Metadata = {
  title: "청약정보서비스",
  description: "맞춤형 청약 정보를 제공하는 서비스입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
