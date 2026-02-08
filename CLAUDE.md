# 💰 소비 성향 테스트 프로젝트

## 📌 프로젝트 개요

Next.js 14 기반의 MBTI 스타일 재테크 성향 테스트 사이트

- **목적**: 사용자의 소비 습관을 분석하고 맞춤 상품/강의 추천
- **수익 모델**: 쿠팡 파트너스 + 인프런 제휴 + 애드센스
- **목표**: 1개월 내 배포 및 첫 수익 발생

---

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: GA4
- **Deployment**: Vercel

---

## 📁 프로젝트 구조

```
/src
  /app
    /page.tsx           # 메인 페이지 (시작 화면)
    /test
      /page.tsx         # 질문 페이지
    /result
      /page.tsx         # 결과 페이지
  /components           # 재사용 컴포넌트
    /Question.tsx
    /Result.tsx
    /ProductCard.tsx
    /CourseCard.tsx
  /data                 # 상수 데이터
    /questions.ts       # 질문 데이터
    /results.ts         # 결과 유형 데이터
    /products.ts        # 쿠팡 상품 데이터
    /courses.ts         # 인프런 강의 데이터
  /types                # 타입 정의
    /test.ts
    /result.ts
  /utils                # 유틸 함수
    /calculateResult.ts # 결과 계산 로직
```

---

## 🎯 코딩 규칙

### 1. 파일 구조

- **상수는 `/data` 폴더**에 분리
- **타입은 `/types` 폴더**에 분리
- **유틸 함수는 `/utils` 폴더**에 분리
- 컴포넌트는 기능별로 분리

### 2. 함수 작성

- **한 함수는 한 가지 기능만** 담당
- 함수명은 동사로 시작 (calculate, handle, fetch 등)
- 복잡한 로직은 작은 함수로 분리

### 3. 컴포넌트 작성

- **Server Component 우선** 사용
- 상호작용 필요시에만 `'use client'`
- Props는 interface로 타입 정의

### 4. 네이밍 컨벤션

- 컴포넌트: PascalCase (`ProductCard.tsx`)
- 함수/변수: camelCase (`calculateResult`)
- 상수: UPPER_SNAKE_CASE (`MAX_QUESTIONS`)
- 타입/인터페이스: PascalCase (`ResultType`)

### 5. TypeScript

- `any` 사용 금지
- 모든 함수에 타입 명시
- Props는 interface로 정의

---

## 📐 UI/UX 가이드

### 디자인 원칙

- **모바일 퍼스트**: 9:16 세로 화면 최적화
- **미니멀**: 불필요한 요소 제거
- **명확한 CTA**: 버튼/링크 명확하게

### Tailwind 사용

- 일관된 색상: `blue-500`, `gray-600` 등
- 간격: `p-4`, `mb-8` 등 4의 배수
- 반응형: `md:`, `lg:` 브레이크포인트 활용

### 애니메이션

- 과하지 않게 (transition, hover만)
- `transition-colors`, `hover:bg-blue-600` 등

---

## 🔗 제휴 링크 규칙

### 쿠팡 파트너스

- 링크 형식: `https://link.coupang.com/a/...`
- 면책 고지 필수 (footer에 명시)

### 인프런

- 링크 형식: `https://www.inflearn.com/course/...?inst=...`
- 제휴 코드 포함

### 애드센스

- 광고는 최소화 (UX 해치지 않게)
- 위치: 사이드바 또는 결과 페이지 하단

---

## 📊 데이터 구조

### Question 타입

```typescript
interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: "A" | "B" | "C" | "D";
  }[];
}
```

### Result 타입

```typescript
interface Result {
  type: string;
  percentage: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  products: Product[];
  courses: Course[];
}
```

### Product 타입

```typescript
interface Product {
  name: string;
  reason: string;
  link: string;
  price: string;
}
```

### Course 타입

```typescript
interface Course {
  name: string;
  instructor: string;
  price: string;
  discount?: string;
  link: string;
  badge?: string;
}
```

---

## 🎨 스타일 가이드

### 색상 팔레트

```
Primary: blue-500 (#3B82F6)
Secondary: purple-500 (#A855F7)
Success: green-500
Error: red-500
Text: gray-900
Text-secondary: gray-600
Background: white
Background-secondary: gray-50
```

### 그라데이션

```
from-blue-500 to-purple-500
from-green-400 to-blue-500
```

---

## 🚀 배포 전 체크리스트

- [ ] 모든 링크 작동 확인 (쿠팡, 인프런)
- [ ] 모바일 반응형 테스트
- [ ] GA4 이벤트 트래킹 작동 확인
- [ ] 오타 검사
- [ ] 로딩 속도 확인 (Lighthouse)
- [ ] SEO 메타 태그 설정
- [ ] OG 이미지 설정

---

## 📝 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
style: 스타일 변경 (코드 동작 변경 없음)
refactor: 코드 리팩토링
docs: 문서 수정
chore: 기타 변경사항
```

예시:

```
feat: 질문 페이지 구현
fix: 결과 계산 로직 오류 수정
style: 버튼 hover 효과 추가
```

---

## 🐛 개발 중 이슈 해결

### 에러 발생 시

1. 에러 메시지 전체 복사
2. Claude에게 물어보기
3. 해결 방법 문서화 (여기에 추가)

### 막힐 때

1. 5분 고민
2. 안 되면 Claude에게 질문
3. 완벽 추구하지 말기 (70%면 다음 단계)

---

## 📌 중요 원칙

1. **빠른 실행**: 완벽보다 실행
2. **데이터 기반**: GA4 보고 개선
3. **사용자 중심**: UX 최우선
4. **간결함**: 복잡한 것은 나쁜 것

---

## 🎯 1개월 목표

- [ ] Week 1: 사이트 배포
- [ ] Week 2: 방문자 100명
- [ ] Week 3: 방문자 500명
- [ ] Week 4: 첫 수익 발생

---

## 💬 Claude에게 요청 시 팁

### 코드 요청

```
"[기능] 구현해줘.
- 조건 1
- 조건 2
전체 코드 달라. 한 함수는 한 기능만."
```

### 수정 요청

```
"[현재 코드 붙여넣기]

여기에 [기능] 추가하고 싶어.
수정된 전체 코드 달라."
```

### 에러 해결

```
"이런 에러 났어:
[에러 메시지 전체 복사]

어떻게 해결해?"
```

---

## 📅 개발 일지

### Day 1 (2025.\_\_)

- [x] 프로젝트 생성
- [x] npm install
- [x] claude.md 작성
- [ ] 데이터 파일 작성
- [ ] 메인 페이지 구현

### Day 2

- [ ]

---

## 🔗 참고 링크

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [쿠팡 파트너스](https://partners.coupang.com)
- [노션 프로젝트 계획](https://www.notion.so/...)

---

**마지막 업데이트: 2025.**.****

```

---
```
