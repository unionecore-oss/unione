# Quickstart: Card 히어로 모바일 배경 이미지 최적화

**Feature**: 006-fix-card-hero-mobile
**Last Updated**: 2025-10-22

## 개발 환경 설정

### 1. 사전 요구사항

- Node.js 20+
- npm 또는 yarn
- Chrome 또는 Safari 개발자 도구

### 2. 프로젝트 실행

```bash
# 저장소 클론 (이미 클론된 경우 건너뛰기)
git clone <repository-url>
cd unione

# 피처 브랜치로 전환
git checkout 006-fix-card-hero-mobile

# 의존성 설치 (필요시)
npm install

# 개발 서버 시작
npm run dev
```

개발 서버가 실행되면 http://localhost:3000 (또는 할당된 포트)로 접속합니다.

### 3. Card 페이지 접속

브라우저에서 다음 URL로 이동:
- 한국어: http://localhost:3000/ko/card
- 영어: http://localhost:3000/en/card

## 테스트 방법

### 방법 1: Chrome DevTools (권장)

1. **DevTools 열기**: F12 또는 Cmd+Option+I (Mac)

2. **Device Toolbar 활성화**: Cmd+Shift+M (Mac) 또는 Ctrl+Shift+M (Windows)

3. **테스트 기기 선택** (상단 드롭다운):
   ```
   모바일 우선 테스트:
   - iPhone SE (375 x 667)
   - iPhone 14 (390 x 844)
   - iPhone 14 Pro Max (430 x 932)
   - Galaxy S23 (360 x 800)
   - Pixel 7 (412 x 915)

   태블릿:
   - iPad Mini (768 x 1024)
   - iPad Pro (1024 x 1366)

   데스크탑:
   - 1920 x 1080
   - 2560 x 1440
   ```

4. **확인사항**:
   - ✅ 손가락으로 카드를 들고 있는 전체 이미지가 보이는가?
   - ✅ 손가락이 크롭되지 않았는가?
   - ✅ 카드 전체가 뷰포트 내에 있는가?
   - ✅ 이미지가 왜곡되지 않았는가?

5. **화면 회전 테스트**:
   - DevTools에서 Rotate 아이콘 클릭
   - Portrait ↔ Landscape 전환 시 이미지 재배치 확인

### 방법 2: 브라우저 창 리사이즈

1. 브라우저 창을 좁게 조정 (320px까지)
2. 서서히 넓히면서 브레이크포인트별 변화 확인:
   - 320px-767px: 모바일 (손가락+카드 중심)
   - 768px-1023px: 태블릿 (중간 전환)
   - 1024px+: 데스크탑 (기존 레이아웃)

### 방법 3: 실제 기기 테스트 (최종 검증)

```bash
# 로컬 네트워크에서 접근 가능하도록 설정
# package.json의 dev 스크립트가 이미 --host 옵션을 포함하고 있는지 확인

# 개발 서버 시작 (네트워크 노출)
npm run dev -- --host

# 터미널에 표시된 Network 주소를 모바일 기기에서 접속
# 예: http://192.168.0.100:3000/ko/card
```

**실제 테스트 기기**:
- iPhone SE, iPhone 12, iPhone 14 (iOS Safari)
- Galaxy S21, S23 (Chrome Android)
- iPad (Safari)

## 수정 파일 위치

```
src/components/sections/card/CardHero/index.tsx
```

**수정 내용**:
- `<img>` 태그의 `className` 속성에 반응형 `object-position` 추가
- 기존 `objectPosition: 'center center'` inline style 제거 (Tailwind로 대체)

**수정 예시**:
```tsx
// 변경 전
<img
  src="/card6.png"
  alt="Unione Card"
  className="w-full h-full object-cover"
  style={{
    filter: CSS_FILTERS.cardPage.heroBackground,
    objectPosition: 'center center',  // ← 제거
  }}
/>

// 변경 후
<img
  src="/card6.png"
  alt="Unione Card"
  className="w-full h-full object-cover
    object-[65%_center]           // 모바일
    md:object-[55%_center]        // 태블릿
    lg:object-center"             // 데스크탑
  style={{
    filter: CSS_FILTERS.cardPage.heroBackground,
  }}
/>
```

## 성능 검증

### Lighthouse 점수 확인

1. Chrome DevTools → Lighthouse 탭
2. Categories: Performance, Accessibility 선택
3. Device: Mobile 선택
4. **Generate report** 클릭

**목표**:
- Performance: 90+
- Accessibility: 90+ (변화 없어야 함)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 네트워크 시뮬레이션

1. DevTools → Network 탭
2. Throttling 드롭다운 선택:
   - **Fast 3G**: 이미지 로딩 3초 이내 확인
   - **4G LTE**: 이미지 로딩 1초 이내 확인

## 스크린샷 비교 (선택사항)

### Playwright로 자동화된 스크린샷

```bash
# Playwright 설치 (처음 한 번만)
npx playwright install

# 스크린샷 테스트 스크립트 실행
npx playwright test screenshots
```

**비교 대상**:
- 변경 전 (main 브랜치)
- 변경 후 (006-fix-card-hero-mobile 브랜치)

## 문제 해결

### 이미지가 여전히 크롭됨

**증상**: 모바일에서 손가락이 안보임

**해결**:
1. `object-[65%_center]` 값을 `object-[70%_center]`로 증가
2. 또는 `object-[60%_center]`로 감소
3. DevTools에서 실시간 조정하여 최적값 찾기

**CSS 오버라이드 확인**:
```bash
# DevTools → Elements → Computed 탭에서
# object-position 최종 계산값 확인
```

### 데스크탑에서 이미지가 이상함

**증상**: 데스크탑에서 이미지가 오른쪽으로 치우침

**해결**:
- `lg:object-center` 클래스가 올바르게 적용되었는지 확인
- 브라우저 캐시 클리어 (Cmd+Shift+R)

### Hot Reload가 작동하지 않음

**해결**:
```bash
# 개발 서버 재시작
# Ctrl+C로 중지 후
npm run dev
```

### Tailwind 클래스가 적용되지 않음

**해결**:
1. `tailwind.config.js`에서 `content` 경로 확인
2. Tailwind CSS 빌드 재실행 (개발 서버 재시작)

## Success Criteria 체크리스트

테스트 완료 후 다음 항목 확인:

- [ ] **SC-001**: 모바일(320-767px)에서 95% 사용자가 손가락과 카드 전체 인식 가능
  - 10명에게 보여주고 9명 이상이 "손가락이 보인다" 응답

- [ ] **SC-002**: 10종 주요 기기에서 핵심 요소 100% 뷰포트 내 표시
  - iPhone SE, 14, 14 Pro Max, Galaxy S23, Pixel 7, iPad Mini, iPad Pro 등

- [ ] **SC-003**: 데스크탑/태블릿에서 시각적 회귀 없음
  - main 브랜치와 스크린샷 비교

- [ ] **SC-004**: 이미지 로딩 시간
  - 3G: 3초 이내
  - LTE: 1초 이내

- [ ] **SC-005**: 화면 회전 시 재배치 0.3초 이내
  - DevTools에서 Rotate 클릭 후 즉시 적용 확인

## 추가 리소스

- [Tailwind CSS object-position 문서](https://tailwindcss.com/docs/object-position)
- [MDN: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Lighthouse 가이드](https://developers.google.com/web/tools/lighthouse)

## 다음 단계

테스트 완료 후:

1. `/speckit.tasks` 명령 실행 → 구현 태스크 생성
2. tasks.md의 작업 항목을 따라 구현
3. 모든 테스트 통과 확인
4. Pull Request 생성
