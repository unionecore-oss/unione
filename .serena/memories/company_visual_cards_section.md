# Company 페이지 비주얼 카드 섹션 추가

## 구현 내용
About Unione 섹션의 두 번째 문단 다음에 화려한 Core Values 카드 섹션 추가

### 카드 구성 (4개)
1. **Security First** (시안 그라디언트)
   - 아이콘: 🛡️
   - 설명: Bank-level encryption and multi-layer protection

2. **Lightning Fast** (퍼플 그라디언트)
   - 아이콘: ⚡
   - 설명: Instant transactions with minimal fees

3. **Global Access** (그린 그라디언트)
   - 아이콘: 🌍
   - 설명: Available in 50+ countries worldwide

4. **Premium Experience** (옐로우 그라디언트)
   - 아이콘: 💎
   - 설명: Best-in-class features and support

### 기술적 특징
- Framer Motion stagger 애니메이션
- Hover 효과: scale 1.05 + glow shadow + 색상 변화
- 반응형 그리드: 1열(모바일) → 2열(태블릿) → 4열(데스크탑)
- Backdrop blur 및 그라디언트 배경
- 부드러운 transition 효과

## 파일 수정
- `/src/components/sections/company/AboutUnione/index.tsx`

## 커밋
- ID: ad370fa
- 목적: 텍스트 중심 페이지에 시각적 요소 추가로 가독성 및 브랜드 경험 향상
