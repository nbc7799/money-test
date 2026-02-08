import { ResultType } from "../types";

export function calculateResult(answers: string[]): ResultType {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

  answers.forEach((answer) => {
    counts[answer]++;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  return sorted[0][0] as ResultType;
}
