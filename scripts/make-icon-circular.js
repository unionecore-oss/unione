#!/usr/bin/env node
/**
 * 파비콘 이미지를 원형으로 만드는 스크립트
 *
 * 사용법:
 * node scripts/make-icon-circular.js
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const inputPath = path.join(projectRoot, 'src/app/icon.png');
const backupPath = path.join(projectRoot, 'src/app/icon-original.png');
const outputPath = path.join(projectRoot, 'src/app/icon-circular.png');

// sharp 라이브러리 확인
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('✗ sharp 라이브러리가 설치되어 있지 않습니다.');
  console.error('  설치: npm install sharp --save-dev');
  process.exit(1);
}

async function makeCircularIcon() {
  try {
    // 파일 존재 확인
    if (!fs.existsSync(inputPath)) {
      console.error(`✗ 입력 파일을 찾을 수 없습니다: ${inputPath}`);
      process.exit(1);
    }

    // 이미지 메타데이터 읽기
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width, metadata.height);

    console.log(`📐 원본 이미지 크기: ${metadata.width}x${metadata.height}`);

    // 원형 마스크 SVG 생성
    const circleSvg = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );

    // 원형 이미지 생성
    await sharp(inputPath)
      .resize(size, size, { fit: 'cover' })
      .composite([
        {
          input: circleSvg,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);

    console.log(`✓ 원형 아이콘 생성 완료: ${outputPath}`);

    // 원본 백업 (백업이 없는 경우에만)
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`✓ 원본 백업 완료: ${backupPath}`);
    }

    // 원형 이미지로 교체
    fs.copyFileSync(outputPath, inputPath);
    console.log(`✓ 파비콘 교체 완료: ${inputPath}`);
    console.log(`  크기: ${size}x${size}`);

    console.log('\n📱 브라우저에서 확인하기:');
    console.log('1. 개발 서버가 실행 중이라면 자동으로 새로고침됩니다');
    console.log('2. 브라우저 캐시 강제 새로고침:');
    console.log('   - Mac: Cmd+Shift+R');
    console.log('   - Windows/Linux: Ctrl+Shift+R');
    console.log('3. 또는 브라우저 개발자 도구에서 "Disable cache" 활성화');

    console.log('\n💡 원본으로 되돌리기:');
    console.log(`   cp ${backupPath} ${inputPath}`);

  } catch (error) {
    console.error('✗ 오류 발생:', error.message);
    process.exit(1);
  }
}

makeCircularIcon();
