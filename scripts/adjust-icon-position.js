#!/usr/bin/env node
/**
 * 파비콘 이미지의 U자 모양을 아래로 이동시키는 스크립트
 *
 * 사용법:
 * node scripts/adjust-icon-position.js [이동 픽셀 수]
 * 예: node scripts/adjust-icon-position.js 10
 *
 * 참고: 이동 픽셀 수는 아래쪽 방향입니다
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const inputPath = path.join(projectRoot, 'src/app/icon-original.png');
const outputPath = path.join(projectRoot, 'src/app/icon.png');
const tempPath = path.join(projectRoot, 'src/app/icon-temp.png');

// 명령줄 인자로 이동 픽셀 수 받기 (기본값: 10px, 아래쪽 방향)
const offsetY = parseInt(process.argv[2]) || 10;

// sharp 라이브러리 확인
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('✗ sharp 라이브러리가 설치되어 있지 않습니다.');
  console.error('  설치: npm install sharp --save-dev');
  process.exit(1);
}

async function adjustIconPosition() {
  try {
    // 파일 존재 확인
    if (!fs.existsSync(inputPath)) {
      console.error(`✗ 입력 파일을 찾을 수 없습니다: ${inputPath}`);
      console.error(`  원본 백업 파일이 필요합니다.`);
      process.exit(1);
    }

    console.log(`📐 U자 모양을 ${offsetY}px 아래로 이동합니다...`);
    console.log(`⚠️  상단이 절대 잘리지 않도록 안전하게 처리합니다.`);

    // 이미지 메타데이터 읽기
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;

    console.log(`📏 원본 이미지 크기: ${width}x${height}`);

    // 1단계: 원본 이미지를 위로 이동
    const canvasSize = 512;

    // 원본 이미지 로드
    const originalImage = await sharp(inputPath).png().toBuffer();

    // 새로운 512x512 검은 배경 생성
    const blackCanvas = await sharp({
      create: {
        width: canvasSize,
        height: canvasSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    }).png().toBuffer();

    // 원본 이미지를 offsetY만큼 아래로 배치
    await sharp(blackCanvas)
      .composite([{
        input: originalImage,
        top: offsetY, // 아래로 이동
        left: 0
      }])
      .png()
      .toFile(tempPath);

    console.log(`✓ 1단계: U자 위치 조정 완료 (상단은 보존됨)`);

    // 2단계: 원형 마스크 적용
    const circleSvg = Buffer.from(
      `<svg width="${canvasSize}" height="${canvasSize}">
        <circle cx="${canvasSize / 2}" cy="${canvasSize / 2}" r="${canvasSize / 2}" fill="white"/>
      </svg>`
    );

    await sharp(tempPath)
      .composite([
        {
          input: circleSvg,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);

    console.log(`✓ 2단계: 원형 마스크 적용 완료`);

    // 임시 파일 삭제
    fs.unlinkSync(tempPath);

    console.log(`\n✅ 파비콘 업데이트 완료!`);
    console.log(`📍 U자 이동 거리: ${offsetY}px (아래쪽 방향)`);
    console.log(`   - 상단은 절대 잘리지 않음`);
    console.log(`   - U자 전체가 보존됨`);
    console.log(`📁 출력 파일: ${outputPath}`);
    console.log(`   크기: ${canvasSize}x${canvasSize}`);

    console.log('\n📱 브라우저에서 확인하기:');
    console.log('1. 개발 서버가 실행 중이라면 자동으로 새로고침됩니다');
    console.log('2. 브라우저 캐시 강제 새로고침:');
    console.log('   - Mac: Cmd+Shift+R');
    console.log('   - Windows/Linux: Ctrl+Shift+R');

    console.log('\n🔄 다른 위치로 조정하려면:');
    console.log(`   node scripts/adjust-icon-position.js [픽셀수]`);
    console.log(`   예: node scripts/adjust-icon-position.js 20`);

  } catch (error) {
    console.error('✗ 오류 발생:', error.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    process.exit(1);
  }
}

adjustIconPosition();
