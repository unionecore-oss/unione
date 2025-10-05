import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Console 로그 수집
  const consoleLogs = [];
  page.on('console', msg => {
    consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // 에러 수집
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  try {
    console.log('1. 페이지 로딩 시작...');
    await page.goto('http://localhost:3004', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('2. 초기 로드 스크린샷 촬영...');
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/screenshot-1-initial.png',
      fullPage: false
    });

    console.log('3. 3초 대기 (애니메이션 확인)...');
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/screenshot-2-after-3s.png',
      fullPage: false
    });

    console.log('4. 추가 3초 대기 (전체 애니메이션 사이클)...');
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/screenshot-3-after-6s.png',
      fullPage: false
    });

    // FPS 측정
    console.log('5. FPS 측정 중...');
    const fps = await page.evaluate(() => {
      return new Promise((resolve) => {
        let frames = 0;
        let lastTime = performance.now();

        function countFrame() {
          frames++;
          const currentTime = performance.now();

          if (currentTime - lastTime >= 1000) {
            resolve(frames);
          } else {
            requestAnimationFrame(countFrame);
          }
        }

        requestAnimationFrame(countFrame);
      });
    });

    // Canvas 요소 확인
    const canvasExists = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      return canvas ? {
        exists: true,
        width: canvas.width,
        height: canvas.height
      } : { exists: false };
    });

    // 3D 요소 로드 확인
    const threeDLoaded = await page.evaluate(() => {
      // R3F가 제대로 로드되었는지 확인
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;

      // WebGL 컨텍스트 확인
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      return gl !== null;
    });

    console.log('\n=== 테스트 결과 ===');
    console.log('Canvas 존재:', canvasExists);
    console.log('3D (WebGL) 로드됨:', threeDLoaded);
    console.log('FPS:', fps);
    console.log('\n=== Console 로그 (최근 20개) ===');
    consoleLogs.slice(-20).forEach(log => console.log(log));
    console.log('\n=== 에러 ===');
    if (errors.length > 0) {
      errors.forEach(err => console.log(err));
    } else {
      console.log('에러 없음');
    }

    // 결과를 JSON으로 저장
    const results = {
      canvasExists,
      threeDLoaded,
      fps,
      consoleLogs: consoleLogs.slice(-20),
      errors,
      timestamp: new Date().toISOString()
    };

    fs.writeFileSync(
      '/Users/ai-code-lab/projects/UNIONE/test-results.json',
      JSON.stringify(results, null, 2)
    );

    console.log('\n✓ 스크린샷 3개 저장 완료');
    console.log('✓ 테스트 결과 JSON 저장 완료');

  } catch (error) {
    console.error('테스트 실패:', error);
  } finally {
    // 브라우저 종료 전 5초 대기 (수동 확인 시간)
    console.log('\n브라우저를 5초 후 종료합니다...');
    await page.waitForTimeout(5000);
    await browser.close();
  }
})();
