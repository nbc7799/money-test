export const questions = [
  {
    id: 1,
    question: "월급이나 용돈을 받으면 제일 먼저 하는 일은?",
    options: [
      { text: "바로 저축 통장으로 이체", value: "A" },
      { text: "갖고 싶었던 것 구매", value: "C" },
      { text: "일단 그냥 놔둔다", value: "B" },
      { text: "투자 앱으로 이체", value: "D" },
    ],
  },
  {
    id: 2,
    question: "커피는 주로 어떻게 마시나요?",
    options: [
      { text: "집에서 직접 타먹음", value: "A" },
      { text: "편의점 커피", value: "B" },
      { text: "카페 자주 감", value: "C" },
      { text: "커피 안 마심 (물)", value: "A" },
    ],
  },
  {
    id: 3,
    question: "배달 음식은 얼마나 자주?",
    options: [
      { text: "거의 안 시킴", value: "A" },
      { text: "월 1-2회", value: "B" },
      { text: "주 1-2회", value: "C" },
      { text: "주 3회 이상", value: "C" },
    ],
  },
  {
    id: 4,
    question: "쇼핑할 때 나는?",
    options: [
      { text: "필요한 것만 리스트 작성", value: "A" },
      { text: "할인하면 사는 편", value: "B" },
      { text: "충동구매 자주 함", value: "C" },
      { text: "투자 생각하며 최소화", value: "D" },
    ],
  },
  {
    id: 5,
    question: "비상금은 얼마나 있나요?",
    options: [
      { text: "월급의 3개월치 이상", value: "A" },
      { text: "월급의 1개월치 정도", value: "B" },
      { text: "거의 없음", value: "C" },
      { text: "비상금 대신 투자 중", value: "D" },
    ],
  },
  {
    id: 6,
    question: "할인/이벤트 정보는?",
    options: [
      { text: "앱으로 꼼꼼히 확인", value: "A" },
      { text: "가끔 보는 편", value: "B" },
      { text: "관심 없음", value: "C" },
      { text: "투자 정보만 봄", value: "D" },
    ],
  },
  {
    id: 7,
    question: "통장은 몇 개?",
    options: [
      { text: "3개 이상 (용도별 분리)", value: "A" },
      { text: "2개 (급여+저축)", value: "B" },
      { text: "1개만 씀", value: "C" },
      { text: "통장+투자 계좌 여러 개", value: "D" },
    ],
  },
  {
    id: 8,
    question: "친구 생일 선물 예산은?",
    options: [
      { text: "1-2만원", value: "A" },
      { text: "3-5만원", value: "B" },
      { text: "5만원 이상", value: "C" },
      { text: "주식 선물", value: "D" },
    ],
  },
  {
    id: 9,
    question: "재테크 공부는?",
    options: [
      { text: "절약 중심으로 공부", value: "A" },
      { text: "가끔 관심", value: "B" },
      { text: "별로 안 함", value: "C" },
      { text: "투자 위주로 공부", value: "D" },
    ],
  },
  {
    id: 10,
    question: "10만원 생기면?",
    options: [
      { text: "바로 저축", value: "A" },
      { text: "반은 저축, 반은 소비", value: "B" },
      { text: "쓰고 싶은 거 산다", value: "C" },
      { text: "투자한다", value: "D" },
    ],
  },
] as const;
