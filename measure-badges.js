const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to http://localhost:3002...');
    await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });

    // Wait for the page to be fully loaded
    await page.waitForTimeout(3000);

    // Take a full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({ path: '.playwright-mcp/full-page.png', fullPage: true });

    // Find the download badges section
    console.log('Looking for download badges...');

    // Try to find App Store badge
    const appStoreBadge = await page.locator('img[alt*="App Store"], a[href*="apple"] img').first();
    const googlePlayBadge = await page.locator('img[alt*="Google Play"], a[href*="google"] img, a[href*="play.google"] img').first();

    // Check if badges exist
    const appStoreExists = await appStoreBadge.count() > 0;
    const googlePlayExists = await googlePlayBadge.count() > 0;

    console.log(`App Store badge found: ${appStoreExists}`);
    console.log(`Google Play badge found: ${googlePlayExists}`);

    if (appStoreExists) {
      const appStoreBox = await appStoreBadge.boundingBox();
      console.log('App Store Badge dimensions:', appStoreBox);

      // Take a screenshot of the App Store badge
      await appStoreBadge.screenshot({ path: '.playwright-mcp/app-store-badge.png' });
    }

    if (googlePlayExists) {
      const googlePlayBox = await googlePlayBadge.boundingBox();
      console.log('Google Play Badge dimensions:', googlePlayBox);

      // Take a screenshot of the Google Play badge
      await googlePlayBadge.screenshot({ path: '.playwright-mcp/google-play-badge.png' });
    }

    // Try to find all images to locate badges
    console.log('\n--- Searching all images on page ---');
    const allImages = await page.locator('img').all();
    console.log(`Total images found: ${allImages.length}`);

    for (let i = 0; i < allImages.length; i++) {
      const img = allImages[i];
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      const box = await img.boundingBox();

      if (src && (src.includes('app-store') || src.includes('google-play') || src.includes('badge'))) {
        console.log(`\nImage ${i + 1}:`);
        console.log(`  src: ${src}`);
        console.log(`  alt: ${alt}`);
        console.log(`  dimensions: ${box ? `${box.width}x${box.height}` : 'not visible'}`);
        console.log(`  position: ${box ? `x=${box.x}, y=${box.y}` : 'not visible'}`);
      }
    }

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
