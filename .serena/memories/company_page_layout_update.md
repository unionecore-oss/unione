# Company 페이지 레이아웃 업데이트

## 수정 내용
- About Unione 섹션: 제목 왼쪽 정렬 (text-center 제거)
- Let's talk 섹션: 제목과 설명 왼쪽 정렬 (text-center 제거)
- Let's talk 섹션에 max-w-4xl mx-auto 컨테이너 추가하여 About Unione과 동일한 여백 적용

## 파일 수정
- `/src/components/sections/company/AboutUnione/index.tsx`
- `/src/components/sections/company/ContactCTA/index.tsx`

## 테스트 완료
- Playwright로 실제 화면 확인
- 두 섹션 모두 왼쪽 정렬 및 일관된 여백 적용 확인
