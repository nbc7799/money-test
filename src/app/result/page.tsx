"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { calculateResult } from "@/utils/calculateResult";
import { results } from "@/data/results";

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const answersParam = searchParams.get("answers");
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerLoaded = useRef(false);

  useEffect(() => {
    if (bannerLoaded.current) return;
    bannerLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    script.onload = () => {
      new (window as any).PartnersCoupang.G({
        id: 963020,
        template: "carousel",
        trackingCode: "AF9006962",
        width: "680",
        height: "140",
        subId: null,
      });

      setTimeout(() => {
        const bannerElement = document.querySelector(
          'iframe[src*="coupang"]'
        )?.parentElement;
        if (bannerElement && bannerRef.current) {
          bannerRef.current.appendChild(bannerElement);
        }
      }, 500);
    };
    document.body.appendChild(script);
  }, []);

  if (!answersParam) {
    router.push("/");
    return null;
  }

  const answers = answersParam.split(",");
  const resultType = calculateResult(answers);
  const result = results[resultType];

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "소비 성향 테스트",
        text: `나는 ${result.type}! 당신도 테스트해보세요!`,
        url: window.location.origin,
      });
    } else {
      alert("공유 기능을 지원하지 않는 브라우저입니다");
    }
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.origin);
    alert("링크가 복사되었습니다!");
  }

  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto flex max-w-7xl gap-8 px-6">
        {/* 메인 콘텐츠 */}
        <div className="max-w-5xl flex-1">
          {/* 결과 헤더 */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-block rounded-full border border-purple-200 bg-purple-50 px-5 py-2">
              <span className="text-sm font-semibold text-purple-700">
                상위 {result.percentage}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              당신은 <span className="gradient-text">{result.type}</span>
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              {result.description}
            </p>

            <div className="mt-8">
              <Image
                src={result.image}
                alt={result.type}
                width={400}
                height={400}
                className="mx-auto rounded-3xl"
              />
            </div>
          </div>

          {/* 강점/약점 */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="floating-card rounded-3xl bg-white p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-green-100 p-3">
                  <svg
                    className="h-7 w-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">강점</h3>
              </div>
              <ul className="space-y-4">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <span className="mt-1 text-green-500">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="floating-card rounded-3xl bg-white p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-blue-100 p-3">
                  <svg
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">보완점</h3>
              </div>
              <ul className="space-y-4">
                {result.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <span className="mt-1 text-blue-500">💡</span>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 추천 상품 */}
          <div className="floating-card mb-12 rounded-[32px] bg-white p-10 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                🎁 추천 상품
              </h2>
              <p className="text-lg text-gray-600">
                {result.type}에게 딱 맞는 재테크 도구
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {result.products.map((product, index) => (
                <a
                  key={index}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border-2 border-gray-200 p-8 transition-all hover:border-purple-500 hover:shadow-xl"
                >
                  <div className="mb-4 inline-block rounded-lg bg-purple-100 px-3 py-1">
                    <span className="text-xs font-bold text-purple-600">
                      추천
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.reason}</p>
                </a>
              ))}
            </div>
          </div>

          {/* 추천 강의 */}
          <div className="floating-card mb-12 rounded-[32px] bg-white p-10 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                📚 추천 강의
              </h2>
              <p className="text-lg text-gray-600">
                검증된 강사진의 베스트 강의
              </p>
            </div>

            <div className="space-y-6">
              {result.courses.map((course, index) => (
                <a
                  key={index}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border-2 border-gray-200 p-8 transition-all hover:border-purple-500 hover:shadow-xl"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      {course.badge && (
                        <div className="mb-3">
                          <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-600">
                            {course.badge}
                          </span>
                        </div>
                      )}
                      <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-purple-600">
                        {course.name}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        by {course.instructor}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-purple-600"></span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center justify-center rounded-2xl bg-gray-100 p-4 transition-all group-hover:bg-purple-100">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 쿠팡 다이나믹 배너 */}
          <div className="mb-4 flex justify-center">
            <div ref={bannerRef} />
          </div>

          {/* 액션 버튼 */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <button
              onClick={handleShare}
              className="btn-primary rounded-full py-5 text-lg font-semibold text-white"
            >
              🔗 결과 공유하기
            </button>
            <button
              onClick={handleCopyLink}
              className="rounded-full border-2 border-gray-200 bg-white py-5 text-lg font-semibold text-gray-700 transition-all hover:border-gray-300 hover:shadow-lg"
            >
              📋 링크 복사
            </button>
            <Link
              href="/"
              className="block rounded-full border-2 border-gray-200 bg-white py-5 text-center text-lg font-semibold text-gray-700 transition-all hover:border-gray-300 hover:shadow-lg"
            >
              🔄 다시 테스트
            </Link>
          </div>

          {/* 면책 고지 */}
          <div className="rounded-2xl bg-gray-100 p-6 text-center">
            <p className="text-sm text-gray-500">
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의
              수수료를 제공받습니다.
            </p>
          </div>
        </div>

        {/* 오른쪽 사이드바 - 데스크톱만 표시 */}
        <aside className="hidden w-[160px] shrink-0 xl:block">
          <div className="sticky top-8">
            <a
              href="https://link.coupang.com/a/dGa6OX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ads-partners.coupang.com/banners/963025?subId=&traceId=V0-301-f5c692db558def48-I963025&w=160&h=600"
                alt="쿠팡 배너"
                className="rounded-lg"
              />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mb-4 inline-block h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>
            <p className="text-lg text-gray-600">결과 분석 중...</p>
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
