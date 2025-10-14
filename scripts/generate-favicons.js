/**
 * 파비콘 생성 스크립트
 *
 * src/app/icon.png를 기반으로 웹 표준에 맞는 다양한 크기의 파비콘을 생성합니다.
 *
 * 생성되는 파일:
 * - favicon.ico (16x16, 32x32, 48x48 멀티 사이즈)
 * - apple-touch-icon.png (180x180)
 * - icon-192.png (192x192) - Android용
 * - icon-512.png (512x512) - 원본 복사
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, '../src/app/icon.png');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('🎨 파비콘 생성 시작...\n');

  // 원본 이미지 확인
  if (!fs.existsSync(sourceIcon)) {
    console.error('❌ 원본 아이콘 파일을 찾을 수 없습니다:', sourceIcon);
    process.exit(1);
  }

  // 원본 이미지 정보 확인
  const metadata = await sharp(sourceIcon).metadata();
  console.log('📄 원본 이미지 정보:');
  console.log(`   크기: ${metadata.width}x${metadata.height}`);
  console.log(`   포맷: ${metadata.format}`);
  console.log('');

  try {
    // 1. Apple Touch Icon (180x180)
    console.log('📱 Apple Touch Icon 생성 중... (180x180)');
    await sharp(sourceIcon)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png 생성 완료\n');

    // 2. Android Chrome Icon 192x192
    console.log('🤖 Android Chrome Icon 생성 중... (192x192)');
    await sharp(sourceIcon)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'icon-192.png'));
    console.log('✅ icon-192.png 생성 완료\n');

    // 3. Android Chrome Icon 512x512 (원본 복사)
    console.log('🤖 Android Chrome Icon 생성 중... (512x512)');
    await sharp(sourceIcon)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'icon-512.png'));
    console.log('✅ icon-512.png 생성 완료\n');

    // 4. Favicon ICO (16x16, 32x32, 48x48)
    console.log('🌐 Favicon.ico 생성 중...');

    // 각 크기별로 PNG 생성
    const sizes = [16, 32, 48];
    const pngBuffers = [];

    for (const size of sizes) {
      console.log(`   - ${size}x${size} 생성 중...`);
      const buffer = await sharp(sourceIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer();
      pngBuffers.push(buffer);
    }

    // 가장 큰 크기(48x48)를 기본 favicon.ico로 사용
    await sharp(pngBuffers[2])
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('✅ favicon.ico 생성 완료\n');

    console.log('🎉 모든 파비콘 생성 완료!\n');
    console.log('생성된 파일 (public 폴더):');
    console.log('  • favicon.ico (48x48)');
    console.log('  • apple-touch-icon.png (180x180)');
    console.log('  • icon-192.png (192x192)');
    console.log('  • icon-512.png (512x512)');
    console.log('');
    console.log('📝 Next.js metadata 설정 (src/app/layout.tsx):');
    console.log('  • favicon.ico - 브라우저 탭');
    console.log('  • apple-touch-icon.png - iOS 홈 화면');
    console.log('  • icon-192.png - Android Chrome (PWA)');
    console.log('  • icon-512.png - Android Chrome (PWA)');
    console.log('');
    console.log('✅ 브라우저 테스트:');
    console.log('  1. http://localhost:5001 접속');
    console.log('  2. 브라우저 탭에서 파비콘 확인');
    console.log('  3. 개발자 도구 > Network > Img 탭에서 파비콘 로드 확인');

  } catch (error) {
    console.error('❌ 파비콘 생성 중 오류 발생:', error);
    process.exit(1);
  }
}

generateFavicons();
