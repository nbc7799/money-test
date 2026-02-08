export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: "A" | "B" | "C" | "D";
  }[];
}

export interface Product {
  name: string;
  reason: string;
  link: string;
  price: string;
}

export interface Course {
  name: string;
  instructor: string;
  price: string;
  discount?: string;
  link: string;
  badge?: string;
}

export interface Result {
  type: string;
  percentage: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  products: Product[];
  courses: Course[];
}

export type ResultType = "A" | "B" | "C" | "D";
