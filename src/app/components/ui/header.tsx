"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-custom">
      <div className="mx-auto max-w-7xl px-20 md:px-24 lg:px-32">
        <div className="flex h-64 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="group flex items-center space-x-8">
            <div className="flex size-32 items-center justify-center rounded-8 bg-gradient-to-br from-blue-500 to-blue-900">
              <svg
                className="size-20 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3L19 9.3zM10 10c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-20-700 text-gray-600 transition-colors duration-200 group-hover:text-blue-500">
                청약정보서비스
              </h1>
              <span className="text-12-400 text-gray-400">
                Housing Subscription
              </span>
            </div>
          </Link>

          {/* 네비게이션 메뉴 (데스크톱) */}
          <nav className="hidden items-center space-x-32 md:flex">
            <Link
              href="/"
              className={`relative text-16-500 transition-all duration-300 ${
                isActive("/")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              청약홈
              {isActive("/") && (
                <span className="absolute -bottom-20 left-0 h-2 w-full rounded-full bg-blue-500" />
              )}
            </Link>
            <Link
              href="/search"
              className={`relative text-16-500 transition-all duration-300 ${
                isActive("/search")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              청약검색
              {isActive("/search") && (
                <span className="absolute -bottom-20 left-0 h-2 w-full rounded-full bg-blue-500" />
              )}
            </Link>
            <Link
              href="/calculator"
              className={`relative text-16-500 transition-all duration-300 ${
                isActive("/calculator")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              가점계산기
              {isActive("/calculator") && (
                <span className="absolute -bottom-20 left-0 h-2 w-full rounded-full bg-blue-500" />
              )}
            </Link>
            <Link
              href="/news"
              className={`relative text-16-500 transition-all duration-300 ${
                isActive("/news")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              청약소식
              {isActive("/news") && (
                <span className="absolute -bottom-20 left-0 h-2 w-full rounded-full bg-blue-500" />
              )}
            </Link>
            <Link
              href="/guide"
              className={`relative text-16-500 transition-all duration-300 ${
                isActive("/guide")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              이용가이드
              {isActive("/guide") && (
                <span className="absolute -bottom-20 left-0 h-2 w-full rounded-full bg-blue-500" />
              )}
            </Link>
          </nav>

          {/* 로그인/회원가입 버튼 (데스크톱) */}
          <div className="hidden items-center space-x-12 md:flex">
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-14-500 text-gray-600 transition-colors duration-200 hover:text-blue-500"
            >
              로그인
            </button>
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="rounded-8 bg-blue-500 px-16 py-10 text-14-600 text-white transition-all duration-200 hover:bg-blue-900 hover:shadow-custom"
            >
              회원가입
            </button>
            <button
              type="button"
              className="p-8 text-gray-600 transition-colors duration-200 hover:text-blue-500"
              title="알림"
            >
              <svg
                className="size-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 17h5l-4.5-4.5L15 8a6 6 0 00-12 0v4.5L7.5 17H13m2 0v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1m4 0V9"
                />
              </svg>
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-8 p-8 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-blue-500 md:hidden"
          >
            <svg
              className="size-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="space-y-4 px-16 pb-16 pt-12">
              <Link
                href="/"
                className={`block py-8 text-16-500 transition-colors duration-200 ${
                  isActive("/")
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                청약홈
              </Link>
              <Link
                href="/search"
                className={`block py-8 text-16-500 transition-colors duration-200 ${
                  isActive("/search")
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                청약검색
              </Link>
              <Link
                href="/calculator"
                className={`block py-8 text-16-500 transition-colors duration-200 ${
                  isActive("/calculator")
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                가점계산기
              </Link>
              <Link
                href="/news"
                className={`block py-8 text-16-500 transition-colors duration-200 ${
                  isActive("/news")
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                청약소식
              </Link>
              <Link
                href="/guide"
                className={`block py-8 text-16-500 transition-colors duration-200 ${
                  isActive("/guide")
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                이용가이드
              </Link>

              {/* 모바일 로그인/회원가입 */}
              <div className="mt-16 space-y-8 border-t border-gray-200 pt-16">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/login");
                  }}
                  className="block w-full py-12 text-left text-16-500 text-gray-600 transition-colors duration-200 hover:text-blue-500"
                >
                  로그인
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/signup");
                  }}
                  className="block w-full rounded-8 bg-blue-500 py-12 text-16-600 text-white transition-all duration-200 hover:bg-blue-900"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
