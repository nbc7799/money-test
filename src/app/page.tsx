import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-white p-6">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        {/* 뱃지 */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-700">
            ✨ 무료 재테크 성향 테스트
          </p>
        </div>
        <section className="flex flex-col gap-3 text-center">
          {/* 메인 타이틀 */}
          <div>
            <h1 className="text-6xl leading-tight font-bold text-gray-900 md:text-7xl lg:text-8xl">
              나의 소비 성향은?
            </h1>
            <span className="gradient-text">재테크 유형 테스트</span>
          </div>

          {/* 설명 */}
          <div className="flex flex-col items-center">
            <p className="mx-auto max-w-2xl text-xl text-gray-600 md:text-2xl">
              10개의 질문으로 알아보는 나만의 재테크 스타일
            </p>
            <p className="text-lg text-gray-500">
              2분이면 충분해요. 지금 바로 시작하세요!
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/test">
              <button className="btn-primary rounded-full px-12 py-4 text-lg font-semibold text-white">
                테스트 시작하기 →
              </button>
            </Link>
            <p className="text-sm text-gray-500">
              무료 · 로그인 불필요 · 2분 소요
            </p>
          </div>

          {/* 사용자 수 */}
          <div className="mb-16 flex items-center justify-center gap-3">
            <p className="text-sm font-medium text-gray-700">
              이미 <strong className="text-purple-600">1,234명</strong>이
              테스트했어요
            </p>
          </div>
        </section>
        {/* 특징 카드들 */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="floating-card rounded-3xl bg-white p-8 text-left">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              빠른 테스트
            </h3>
            <p className="text-gray-600">
              단 2분이면 나의 재테크 유형을 알 수 있어요
            </p>
          </div>

          <div className="floating-card rounded-3xl bg-white p-8 text-left">
            <h3 className="mb-2 text-xl font-bold text-gray-900">4가지 유형</h3>
            <p className="text-gray-600">
              절약러, 균형러, 욜로러, 투자러 중 나는 어디에?
            </p>
          </div>

          <div className="floating-card rounded-3xl bg-white p-8 text-left">
            <h3 className="mb-2 text-xl font-bold text-gray-900">맞춤 추천</h3>
            <p className="text-gray-600">유형별 도서와 강의를 추천해드려요</p>
          </div>
        </div>
      </div>
    </main>
  );
}
