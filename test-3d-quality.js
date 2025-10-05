const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Starting ultra-premium 3D scene quality verification...\n');

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Console 로그 수집
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
    consoleErrors.push(error.toString());
  });

  try {
    console.log('📍 Navigating to http://localhost:3004...');
    await page.goto('http://localhost:3004', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('✅ Page loaded successfully\n');

    // Screenshot 1: Initial load
    console.log('📸 Screenshot 1: Initial load');
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/test-screenshots/01-initial-load.png',
      fullPage: false
    });

    // 3초 대기
    console.log('⏱️  Waiting 3 seconds for animation...');
    await page.waitForTimeout(3000);

    // Screenshot 2: After 3 seconds
    console.log('📸 Screenshot 2: After 3 seconds');
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/test-screenshots/02-after-3sec.png',
      fullPage: false
    });

    // 추가 3초 대기
    console.log('⏱️  Waiting 3 more seconds...');
    await page.waitForTimeout(3000);

    // Screenshot 3: After 6 seconds
    console.log('📸 Screenshot 3: After 6 seconds');
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/test-screenshots/03-after-6sec.png',
      fullPage: false
    });

    // FPS 측정
    console.log('\n🎯 Measuring performance...');
    const fps = await page.evaluate(() => {
      return new Promise((resolve) => {
        let frameCount = 0;
        const startTime = performance.now();

        function countFrame() {
          frameCount++;
          const elapsed = performance.now() - startTime;

          if (elapsed < 1000) {
            requestAnimationFrame(countFrame);
          } else {
            resolve(Math.round(frameCount / (elapsed / 1000)));
          }
        }

        requestAnimationFrame(countFrame);
      });
    });

    console.log(`📊 FPS: ${fps}`);

    // 3D 캔버스 확대 스크린샷
    console.log('\n📸 Screenshot 4: Close-up on 3D scene');
    const canvas = await page.locator('canvas').first();
    if (await canvas.count() > 0) {
      await canvas.screenshot({
        path: '/Users/ai-code-lab/projects/UNIONE/test-screenshots/04-closeup.png'
      });
    }

    // 페이지 메트릭
    const metrics = await page.evaluate(() => {
      return {
        canvasCount: document.querySelectorAll('canvas').length,
        bodyHeight: document.body.scrollHeight,
        title: document.title
      };
    });

    console.log('\n📊 Page Metrics:');
    console.log(`  - Canvas count: ${metrics.canvasCount}`);
    console.log(`  - Page title: ${metrics.title}`);
    console.log(`  - Body height: ${metrics.bodyHeight}px`);

    // 콘솔 에러 리포트
    console.log('\n🔍 Console Errors:');
    if (consoleErrors.length === 0) {
      console.log('  ✅ No errors detected');
    } else {
      consoleErrors.forEach((error, i) => {
        console.log(`  ❌ Error ${i + 1}: ${error}`);
      });
    }

    // 중요한 콘솔 로그 (Three.js 관련)
    const threeJsLogs = consoleLogs.filter(log =>
      log.includes('THREE') ||
      log.includes('WebGL') ||
      log.includes('shader') ||
      log.includes('render')
    );

    if (threeJsLogs.length > 0) {
      console.log('\n🎨 Three.js Logs:');
      threeJsLogs.slice(0, 5).forEach(log => {
        console.log(`  - ${log}`);
      });
    }

    console.log('\n✅ Verification complete!');
    console.log('\n📁 Screenshots saved to: /Users/ai-code-lab/projects/UNIONE/test-screenshots/');

    // 5초간 브라우저 유지 (수동 검증용)
    console.log('\n⏱️  Keeping browser open for 5 seconds for manual inspection...');
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ Error during test:', error);
  } finally {
    await browser.close();
    console.log('\n👋 Browser closed');
  }
})();
