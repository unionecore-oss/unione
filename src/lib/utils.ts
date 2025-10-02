import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn 유틸리티 함수
 * clsx와 tailwind-merge를 결합하여 Tailwind CSS 클래스를 조건부로 병합
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
