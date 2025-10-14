# Card Page Cleanup Session

## 완료된 작업
1. **Hero 섹션 배경 이미지 교체**
   - 파일: `/src/components/sections/card/CardHero/index.tsx`
   - 변경: card2.png로 배경 교체 (손으로 Unione 카드를 들고 있는 이미지)
   - 텍스트 가독성 향상: 진한 그라디언트 오버레이 + 텍스트 그림자

2. **HowItWorks 섹션 정리**
   - 파일: `/src/components/sections/card/HowItWorks/index.tsx`
   - 삭제: "Real-Time Conversion, Low Fees, Global usage, Easy-to-Use App" 제목
   - 삭제: 이미지 위 라벨 (Money-in, Accounts, Global Usage, App)
   - 삭제: LEARN MORE 버튼들

## 수정된 파일
- `/src/components/sections/card/CardHero/index.tsx`
- `/src/components/sections/card/HowItWorks/index.tsx`
- `/public/card2.png` (추가)

## 기술적 패턴
- Framer Motion 애니메이션 (fadeInUp, staggerContainer)
- CSS gradient overlays for text readability
- Text shadows for enhanced visibility
- Clean component structure without unnecessary UI elements