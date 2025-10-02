# 로고 파일 처리 가이드

## 현재 상태
- **파일**: Unione_Logo.ai (Adobe Illustrator 파일)
- **크기**: 66KB
- **위치**: public/images/logo/

## 필요한 작업
Next.js 프로젝트 초기화 후 다음 작업이 필요합니다:

1. **SVG 변환** (권장)
   - AI 파일을 SVG로 변환하여 웹에서 사용
   - 파일명: `unione-logo.svg`
   - 용도: 헤더 로고, 푸터 로고

2. **PNG 버전 생성** (선택)
   - favicon.ico 생성 (32x32)
   - og:image용 PNG (1200x630)
   - apple-touch-icon.png (180x180)

## 변환 방법
- Adobe Illustrator가 있는 경우: AI 파일 열어서 SVG로 직접 저장
- 온라인 컨버터 사용: cloudconvert.com, convertio.co 등
- 개발자 도구: ai2svg npm 패키지 사용

## 사용 예시
```tsx
// Header 컴포넌트에서
import Logo from '/images/logo/unione-logo.svg'

<Image src={Logo} alt="UNIONE" width={120} height={40} />
```

## 주의사항
- SVG 변환 시 텍스트는 아웃라인으로 변환
- 불필요한 레이어나 메타데이터 제거
- 파일 크기 최적화 (SVGO 사용)