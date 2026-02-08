interface StrengthsWeaknessesProps {
  strengths: readonly string[];
  weaknesses: readonly string[];
}

export default function StrengthsWeaknesses({
  strengths,
  weaknesses,
}: StrengthsWeaknessesProps) {
  return (
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
          {strengths.map((strength, index) => (
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
          {weaknesses.map((weakness, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <span className="mt-1 text-blue-500">💡</span>
              <span className="text-gray-700">{weakness}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
