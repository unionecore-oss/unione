const { chromium } = require('playwright');

(async () => {
  console.log('🔍 Verifying 3D Scene Implementation...\n');

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

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

    console.log('✅ Page loaded\n');

    // 5초 대기 (Three.js 초기화)
    await page.waitForTimeout(5000);

    // Three.js 캔버스 확인
    const canvasInfo = await page.evaluate(() => {
      const canvases = document.querySelectorAll('canvas');
      const result = {
        count: canvases.length,
        canvases: []
      };

      canvases.forEach((canvas, index) => {
        const parent = canvas.parentElement;
        const context = canvas.getContext('webgl') || canvas.getContext('webgl2');

        result.canvases.push({
          index,
          width: canvas.width,
          height: canvas.height,
          styleWidth: canvas.style.width,
          styleHeight: canvas.style.height,
          hasWebGL: context !== null,
          contextType: context ? (canvas.getContext('webgl2') ? 'webgl2' : 'webgl') : 'none',
          parentClass: parent?.className || '',
          isVisible: canvas.offsetParent !== null,
          zIndex: window.getComputedStyle(canvas).zIndex
        });
      });

      return result;
    });

    console.log('📊 Canvas Analysis:');
    console.log(`  Total canvases: ${canvasInfo.count}\n`);

    canvasInfo.canvases.forEach(canvas => {
      console.log(`  Canvas ${canvas.index}:`);
      console.log(`    - Dimensions: ${canvas.width} x ${canvas.height}`);
      console.log(`    - Style: ${canvas.styleWidth} x ${canvas.styleHeight}`);
      console.log(`    - WebGL: ${canvas.hasWebGL ? '✅' : '❌'} (${canvas.contextType})`);
      console.log(`    - Visible: ${canvas.isVisible ? '✅' : '❌'}`);
      console.log(`    - Parent class: ${canvas.parentClass}`);
      console.log(`    - Z-index: ${canvas.zIndex}\n`);
    });

    // Three.js 객체 확인
    const threeJsInfo = await page.evaluate(() => {
      // window에서 THREE 확인
      return {
        threeLoaded: typeof window !== 'undefined' && 'THREE' in window,
        r3fPresent: document.querySelector('[data-r3f]') !== null,
        webglSupport: (() => {
          try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('webgl2'));
          } catch (e) {
            return false;
          }
        })()
      };
    });

    console.log('🎨 Three.js Status:');
    console.log(`  - THREE loaded: ${threeJsInfo.threeLoaded ? '✅' : '❌'}`);
    console.log(`  - R3F present: ${threeJsInfo.r3fPresent ? '✅' : '❌'}`);
    console.log(`  - WebGL support: ${threeJsInfo.webglSupport ? '✅' : '❌'}\n`);

    // PNG 이미지 기반 컴포넌트 확인
    const imageShapes = await page.evaluate(() => {
      const images = document.querySelectorAll('img[src*="3d-shapes"], img[src*="shape"]');
      return {
        count: images.length,
        sources: Array.from(images).slice(0, 3).map(img => ({
          src: img.src,
          visible: img.offsetParent !== null
        }))
      };
    });

    console.log('🖼️  PNG Image Shapes:');
    console.log(`  - Count: ${imageShapes.count}`);
    if (imageShapes.sources.length > 0) {
      imageShapes.sources.forEach((img, i) => {
        console.log(`  - Image ${i + 1}: ${img.src.split('/').pop()}`);
      });
    }

    console.log('\n🔍 Console Errors:');
    if (consoleErrors.length === 0) {
      console.log('  ✅ No errors\n');
    } else {
      consoleErrors.forEach(error => {
        console.log(`  ❌ ${error}\n`);
      });
    }

    // Three.js 관련 로그
    const threeRelatedLogs = consoleLogs.filter(log =>
      log.toLowerCase().includes('three') ||
      log.toLowerCase().includes('webgl') ||
      log.toLowerCase().includes('r3f') ||
      log.toLowerCase().includes('canvas')
    );

    if (threeRelatedLogs.length > 0) {
      console.log('📝 Three.js Related Logs:');
      threeRelatedLogs.slice(0, 5).forEach(log => {
        console.log(`  - ${log}`);
      });
      console.log('');
    }

    // 최종 스크린샷
    await page.screenshot({
      path: '/Users/ai-code-lab/projects/UNIONE/test-screenshots/scene-verification.png',
      fullPage: false
    });

    console.log('✅ Verification complete!');
    console.log('📸 Screenshot saved: test-screenshots/scene-verification.png\n');

    // 브라우저 열어두기 (수동 검증)
    console.log('⏱️  Keeping browser open for 8 seconds...');
    await page.waitForTimeout(8000);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
    console.log('\n👋 Browser closed');
  }
})();
