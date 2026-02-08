"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  function handleAnswer(value: string) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push(`/result?answers=${newAnswers.join(",")}`);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  }

  return (
    <main className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-6">
        {/* 상단 정보 */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm">
            <span className="text-sm font-semibold text-gray-700">
              질문 {currentIndex + 1} / {questions.length}
            </span>
          </div>

          {/* 진행률 바 */}
          <div className="mx-auto max-w-md">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-medium text-purple-600">
              {Math.round(progress)}% 완료
            </p>
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="floating-card mb-8 rounded-[32px] bg-white p-12 text-center md:p-16">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-600">
              Q{currentIndex + 1}
            </span>
          </div>

          <h2 className="mb-16 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            {currentQuestion.question}
          </h2>

          {/* 선택지 */}
          <div className="flex items-center justify-center">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="flex rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-purple-500 hover:bg-purple-50 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="text-lg font-medium text-gray-800 md:text-xl">
                  <span className="font-bold text-purple-600 group-hover:text-purple-700">
                    {String.fromCharCode(65 + index)}.
                  </span>{" "}
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 이전 버튼 */}
        {currentIndex > 0 && (
          <div className="text-center w-full">
            <button
              onClick={handlePrevious}
              className="items-center flex-row gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:border-gray-300 hover:shadow-md "
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="w-full flex whitespace-nowrap">이전 질문</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
