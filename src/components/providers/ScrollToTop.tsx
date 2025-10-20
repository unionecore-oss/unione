'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // 페이지 로드 시 맨 위로 스크롤
    window.scrollTo(0, 0)
  }, [])

  return null
}
