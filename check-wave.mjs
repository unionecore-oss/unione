import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to http://localhost:3002...');
  await page.goto('http://localhost:3002');

  console.log('Waiting 5 seconds for animations...');
  await page.waitForTimeout(5000);

  console.log('Taking screenshot...');
  await page.screenshot({ path: 'wave-check.png', fullPage: false });

  console.log('Checking for errors in console...');
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

  // Check if WaveEffect component is rendered
  const waveEffect = await page.evaluate(() => {
    const elements = document.querySelectorAll('svg');
    return {
      svgCount: elements.length,
      svgDetails: Array.from(elements).map(svg => ({
        width: svg.getAttribute('width'),
        height: svg.getAttribute('height'),
        viewBox: svg.getAttribute('viewBox'),
        opacity: window.getComputedStyle(svg.parentElement).opacity
      }))
    };
  });

  console.log('SVG elements found:', JSON.stringify(waveEffect, null, 2));

  await browser.close();
  console.log('Screenshot saved as wave-check.png');
})();
