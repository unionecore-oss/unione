import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function test3DScene() {
  const browser = await chromium.launch({
    headless: false,
    devtools: true
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Console logs 수집
  const consoleLogs = [];
  page.on('console', msg => {
    consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
    console.log(`[Browser Console ${msg.type()}]`, msg.text());
  });

  // 에러 수집
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.message);
    console.error('[Browser Error]', error.message);
  });

  console.log('\n🚀 Navigating to http://localhost:3004...\n');
  await page.goto('http://localhost:3004', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // 초기 로드 스크린샷
  console.log('📸 Taking initial screenshot...');
  await page.screenshot({
    path: 'screenshot-initial.png',
    fullPage: false
  });

  // 3초 대기 후 애니메이션 확인
  console.log('⏳ Waiting 3 seconds for animation...\n');
  await page.waitForTimeout(3000);

  // 3초 후 스크린샷
  console.log('📸 Taking second screenshot after 3 seconds...');
  await page.screenshot({
    path: 'screenshot-after-3s.png',
    fullPage: false
  });

  // Canvas 요소 확인
  console.log('\n🔍 Checking for Canvas element...');
  const canvasExists = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      return {
        exists: true,
        width: canvas.width,
        height: canvas.height,
        visible: rect.width > 0 && rect.height > 0,
        position: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        }
      };
    }
    return { exists: false };
  });

  console.log('Canvas Info:', JSON.stringify(canvasExists, null, 2));

  // Three.js 확인
  console.log('\n🔍 Checking for Three.js...');
  const threeInfo = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      return {
        hasWebGL: !!gl,
        vendor: gl ? gl.getParameter(gl.VENDOR) : null,
        renderer: gl ? gl.getParameter(gl.RENDERER) : null
      };
    }
    return { hasWebGL: false };
  });

  console.log('WebGL Info:', JSON.stringify(threeInfo, null, 2));

  // Scene3D 컴포넌트 마운트 확인
  console.log('\n🔍 Checking Scene3D mount log...');
  const scene3DLog = consoleLogs.find(log => log.includes('Scene3D mounted'));
  console.log('Scene3D mounted:', !!scene3DLog);

  // 결과 리포트
  console.log('\n' + '='.repeat(80));
  console.log('📊 TEST RESULTS');
  console.log('='.repeat(80));
  console.log(`✅ Canvas exists: ${canvasExists.exists}`);
  console.log(`✅ Canvas visible: ${canvasExists.visible || false}`);
  console.log(`✅ WebGL enabled: ${threeInfo.hasWebGL}`);
  console.log(`✅ Scene3D mounted: ${!!scene3DLog}`);
  console.log(`❌ Errors found: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n🚨 Console Errors:');
    errors.forEach(err => console.log(`  - ${err}`));
  }

  console.log('\n📁 Screenshots saved:');
  console.log('  - screenshot-initial.png');
  console.log('  - screenshot-after-3s.png');

  console.log('\n💡 Console Logs:');
  consoleLogs.forEach(log => console.log(`  ${log}`));

  console.log('\n' + '='.repeat(80));

  // 브라우저 열어두기 (수동으로 확인 가능하도록)
  console.log('\n⏸️  Browser will remain open for 30 seconds for manual inspection...');
  console.log('   Please check if you can see:');
  console.log('   - 7 rotating 3D shapes (purple, pink, blue, yellow, red, violet colors)');
  console.log('   - 10,000 particle field (small dots)');
  console.log('   - Smooth animations\n');

  await page.waitForTimeout(30000);

  await browser.close();
  console.log('\n✅ Test completed!');
}

test3DScene().catch(error => {
  console.error('Test failed:', error);
  process.exit(1);
});
