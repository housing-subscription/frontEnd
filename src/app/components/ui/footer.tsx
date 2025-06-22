import Link from "next/link";

// 정적 데이터만 분리 (실제로 성능에 도움이 되는 부분)
const FOOTER_LINKS = {
  services: [
    { href: "/search", label: "청약검색" },
    { href: "/calculator", label: "가점계산기" },
    { href: "/schedule", label: "청약일정" },
    { href: "/analysis", label: "시장분석" },
    { href: "/news", label: "청약소식" },
  ],
  support: [
    { href: "/faq", label: "자주묻는질문" },
    { href: "/guide", label: "이용가이드" },
    { href: "/contact", label: "문의하기" },
    { href: "/notice", label: "공지사항" },
    { href: "/download", label: "앱 다운로드" },
  ],
  legal: [
    { href: "/terms", label: "이용약관" },
    { href: "/privacy", label: "개인정보처리방침", highlight: true },
    { href: "/location", label: "위치정보이용약관" },
    { href: "/reject-email", label: "이메일무단수집거부" },
  ],
};

const COMPANY_INFO = {
  name: "청약정보서비스",
  phone: "1588-0000",
  email: "support@housing-info.co.kr",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white">
      {/* 메인 푸터 콘텐츠 */}
      <div className="mx-auto max-w-7xl px-20 py-48 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 gap-32 md:grid-cols-4">
          {/* 회사 정보 */}
          <div className="md:col-span-1">
            <div className="mb-20 flex items-center space-x-8">
              <div className="flex size-32 items-center justify-center rounded-8 bg-gradient-to-br from-blue-500 to-blue-900">
                <svg
                  className="size-20 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3L19 9.3zM10 10c0-1.1.9-2 2-2s2 .9 2 2h-4z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-4 text-18-700 text-white">
                  {COMPANY_INFO.name}
                </h3>
                <span className="text-12-400 text-gray-300">
                  Housing Subscription
                </span>
              </div>
            </div>

            <p className="mb-20 text-14-400 leading-relaxed text-gray-300">
              국내 최대 규모의 청약 정보 플랫폼으로
              <br />
              투명하고 정확한 청약 정보를 제공합니다.
            </p>

            {/* SNS 링크 */}
            <div className="flex space-x-12">
              <button
                type="button"
                className="flex size-32 items-center justify-center rounded-8 bg-gray-500 transition-colors duration-200 hover:bg-blue-500"
                title="페이스북"
              >
                <svg
                  className="size-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                type="button"
                className="flex size-32 items-center justify-center rounded-8 bg-gray-500 transition-colors duration-200 hover:bg-blue-500"
                title="인스타그램"
              >
                <svg
                  className="size-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button
                type="button"
                className="flex size-32 items-center justify-center rounded-8 bg-gray-500 transition-colors duration-200 hover:bg-blue-500"
                title="유튜브"
              >
                <svg
                  className="size-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 서비스 메뉴 */}
          <div>
            <h4 className="mb-20 text-16-600 text-white">서비스</h4>
            <ul className="space-y-12">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-14-400 text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="mb-20 text-16-600 text-white">고객지원</h4>
            <ul className="space-y-12">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-14-400 text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객센터 & 앱 다운로드 */}
          <div>
            <h4 className="mb-20 text-16-600 text-white">고객센터</h4>
            <div className="mb-24">
              <p className="mb-8 text-24-700 text-blue-100">
                {COMPANY_INFO.phone}
              </p>
              <p className="text-12-400 text-gray-300">
                평일 09:00~18:00
                <br />
                (토·일·공휴일 휴무)
              </p>
            </div>

            {/* 앱 다운로드 */}
            <div>
              <p className="mb-12 text-14-600 text-white">앱 다운로드</p>
              <div className="space-y-8">
                <button
                  type="button"
                  className="flex w-full items-center space-x-8 rounded-8 bg-gray-500 p-8 transition-colors duration-200 hover:bg-gray-400"
                >
                  <svg
                    className="size-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-10-400 text-gray-300">Download on the</p>
                    <p className="text-12-600 text-white">App Store</p>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center space-x-8 rounded-8 bg-gray-500 p-8 transition-colors duration-200 hover:bg-gray-400"
                >
                  <svg
                    className="size-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.902 1.902 0 0 1-.091-1.986L3.609 1.814zM13.792 12L22.5 3.5c.5-.5.8-1.2.5-2s-1-1.3-1.8-1H5.609L13.792 12zM5.609 22.5H21.2c.8.3 1.5-.2 1.8-1s0-1.5-.5-2L13.792 12 5.609 22.5zM3.518 1.814L13.792 12 3.518 22.186c-.6.6-.6 1.6 0 2.2s1.6.6 2.2 0L16.5 13.2c.8-.8.8-2.1 0-2.9L5.718-.614c-.6-.6-1.6-.6-2.2 0s-.6 1.6 0 2.2l.027.228z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-10-400 text-gray-300">GET IT ON</p>
                    <p className="text-12-600 text-white">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 법적 고지 */}
      <div className="border-t border-gray-500">
        <div className="mx-auto max-w-7xl p-20 md:px-24 lg:px-32">
          <div className="flex flex-col space-y-12 md:flex-row md:items-center md:justify-between md:space-y-0">
            {/* 회사 정보 */}
            <div className="text-12-400 text-gray-300">
              <p className="mb-4">
                (주){COMPANY_INFO.name} | 대표이사: 한상우 | 사업자등록번호:
                123-45-67890
              </p>
              <p className="mb-4">
                성남시 분당구 정자1로, 청약빌딩 10층 | 통신판매업신고:
                2024-분당정자-1234
              </p>
              <p>
                고객센터: {COMPANY_INFO.phone} | 이메일: {COMPANY_INFO.email}
              </p>
            </div>

            {/* 법적 링크 */}
            <div className="flex flex-wrap gap-16 text-12-400">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    link.highlight
                      ? "text-white hover:text-blue-100"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 저작권 */}
          <div className="mt-20 border-t border-gray-500 pt-20 text-center">
            <p className="text-12-400 text-gray-300">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
