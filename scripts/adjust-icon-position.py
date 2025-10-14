#!/usr/bin/env python3
"""
U자 파비콘을 아래로 이동시키되, 위쪽이 절대 잘리지 않도록 조정
"""

from PIL import Image, ImageDraw
import os

def create_adjusted_icon():
    # 경로 설정
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    icon_original = os.path.join(project_dir, "src/app/icon-original.png")
    icon_output = os.path.join(project_dir, "src/app/icon.png")

    # 원본 이미지 로드
    print(f"원본 이미지 로드 중: {icon_original}")
    original = Image.open(icon_original).convert("RGBA")
    original_width, original_height = original.size
    print(f"원본 이미지 크기: {original_width}x{original_height}")

    # 512x512 검은 배경 캔버스 생성
    canvas_size = 512
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 255))

    # 원본 이미지를 512x512로 리사이즈
    resized = original.resize((canvas_size, canvas_size), Image.Resampling.LANCZOS)

    # 새로운 512x512 검은 배경 생성 (U자를 아래로 이동시킬 캔버스)
    final_canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 255))

    # U자를 y축으로 +40px 아래로 이동하여 배치
    # 위쪽은 40px 여유 공간 확보, 아래쪽으로 이동
    offset_y = 40

    # 원본 이미지에서 위쪽 40px을 잘라내지 않고, 전체를 아래로 이동
    # 이를 위해 원본의 위쪽 40px를 제외한 부분을 사용
    crop_top = 0  # 위쪽은 자르지 않음
    crop_bottom = canvas_size - offset_y  # 아래쪽에서 offset만큼 자름

    cropped = resized.crop((0, crop_top, canvas_size, crop_bottom))

    # final_canvas에 offset_y만큼 아래에 붙임
    final_canvas.paste(cropped, (0, offset_y), cropped)

    print(f"U자를 y축으로 +{offset_y}px 아래로 이동")

    # 원형 마스크 생성
    print("원형 마스크 적용 중...")
    mask = Image.new("L", (canvas_size, canvas_size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, canvas_size, canvas_size), fill=255)

    # 원형 마스크 적용
    output = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    output.paste(final_canvas, (0, 0))
    output.putalpha(mask)

    # 저장
    output.save(icon_output, "PNG")
    print(f"✅ 새로운 파비콘 저장 완료: {icon_output}")
    print(f"   - U자가 {offset_y}px 아래로 이동됨")
    print(f"   - 위쪽은 잘리지 않음")
    print(f"   - 원형 마스크 적용됨")

if __name__ == "__main__":
    create_adjusted_icon()
