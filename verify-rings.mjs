import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const screenshotsDir = path.join(process.cwd(), 'screenshots-verification');

// 스크린샷 디렉토리 생성
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function verifyRings() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // 콘솔 로그 수집
  const consoleLogs = [];
  const consoleErrors = [];

  page.on('console', msg => {
    const text = msg.text();
    consoleLogs.push(text);
    if (msg.type() === 'error') {
      consoleErrors.push(text);
    }
  });

  page.on('pageerror', error => {
    consoleErrors.push(`Page Error: ${error.message}`);
  });

  try {
    console.log('📍 Step 1: 페이지 로드 중...');
    await page.goto('http://localhost:3004', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    console.log('📸 Step 1: 초기 로드 스크린샷');
    await page.screenshot({
      path: path.join(screenshotsDir, '01-initial-load.png'),
      fullPage: false
    });

    console.log('⏱️ Step 2: 5초 대기 (회전 관찰)');
    await page.waitForTimeout(5000);

    console.log('📸 Step 2: 5초 후 스크린샷 (회전 확인)');
    await page.screenshot({
      path: path.join(screenshotsDir, '02-after-5sec-rotation.png'),
      fullPage: false
    });

    console.log('🖱️ Step 3: 마우스를 왼쪽 상단으로 이동');
    await page.mouse.move(300, 200);
    await page.waitForTimeout(2000);

    console.log('📸 Step 3: 마우스 왼쪽 상단 스크린샷');
    await page.screenshot({
      path: path.join(screenshotsDir, '03-mouse-top-left.png'),
      fullPage: false
    });

    console.log('🖱️ Step 4: 마우스를 오른쪽 하단으로 이동');
    await page.mouse.move(1600, 900);
    await page.waitForTimeout(2000);

    console.log('📸 Step 4: 마우스 오른쪽 하단 스크린샷');
    await page.screenshot({
      path: path.join(screenshotsDir, '04-mouse-bottom-right.png'),
      fullPage: false
    });

    console.log('🖱️ Step 5: 마우스를 중앙으로 이동');
    await page.mouse.move(960, 540);
    await page.waitForTimeout(2000);

    console.log('📸 Step 5: 마우스 중앙 스크린샷');
    await page.screenshot({
      path: path.join(screenshotsDir, '05-mouse-center.png'),
      fullPage: false
    });

    // Canvas 존재 확인
    const canvasExists = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return { exists: false };

      return {
        exists: true,
        width: canvas.width,
        height: canvas.height,
        clientWidth: canvas.clientWidth,
        clientHeight: canvas.clientHeight
      };
    });

    console.log('\n=== 검증 결과 ===\n');
    console.log('Canvas 정보:', canvasExists);
    console.log('\n콘솔 에러:', consoleErrors.length === 0 ? '없음 ✅' : consoleErrors.join('\n'));
    console.log('\n스크린샷 저장 위치:', screenshotsDir);

    console.log('\n📋 수동 검증 체크리스트:');
    console.log('1. 링이 더 크게 보이는가? (50-60% 캔버스 크기)');
    console.log('2. 두 링이 올림픽 링처럼 겹쳐있는가?');
    console.log('3. 두 링이 반대 방향으로 회전하는가?');
    console.log('4. 마우스 이동 시 링이 반응하는가?');
    console.log('5. 한 링은 마우스를 따라가고, 다른 링은 반대로 움직이는가?');
    console.log('6. "통합/연결" 브랜드 메시지가 전달되는가?');
    console.log('7. 성능 이슈는 없는가?');
    console.log('8. 콘솔 에러는 없는가?');

    // 콘솔 로그 파일로 저장
    fs.writeFileSync(
      path.join(screenshotsDir, 'console-logs.txt'),
      `=== 콘솔 로그 ===\n\n${consoleLogs.join('\n')}\n\n=== 에러 ===\n\n${consoleErrors.join('\n') || '없음'}`
    );

  } catch (error) {
    console.error('❌ 오류 발생:', error);
  } finally {
    console.log('\n브라우저를 10초 후 종료합니다...');
    await page.waitForTimeout(10000);
    await browser.close();
  }
}

verifyRings();
