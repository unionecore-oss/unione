import { cn } from './utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500')
    expect(result).toContain('text-red-500')
    expect(result).toContain('bg-blue-500')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toContain('base-class')
    expect(result).toContain('active-class')
  })

  it('filters out falsy values', () => {
    const result = cn('base', false && 'hidden', null, undefined, '')
    expect(result).toBe('base')
  })

  it('handles Tailwind CSS merge correctly', () => {
    // Tailwind merge should override conflicting classes
    const result = cn('p-4', 'p-6')
    // The last padding class should win
    expect(result).toContain('p-6')
    expect(result).not.toContain('p-4')
  })

  it('handles array of classes', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
    expect(result).toContain('class3')
  })

  it('handles objects with boolean values', () => {
    const result = cn({
      'class1': true,
      'class2': false,
      'class3': true,
    })
    expect(result).toContain('class1')
    expect(result).not.toContain('class2')
    expect(result).toContain('class3')
  })

  it('returns empty string for no arguments', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles complex combinations', () => {
    const isActive = true
    const isDisabled = false
    const result = cn(
      'base-class',
      isActive && 'active',
      isDisabled && 'disabled',
      {
        'hover:bg-blue-500': true,
        'cursor-not-allowed': isDisabled,
      },
      ['flex', 'items-center']
    )
    expect(result).toContain('base-class')
    expect(result).toContain('active')
    expect(result).not.toContain('disabled')
    expect(result).toContain('hover:bg-blue-500')
    expect(result).not.toContain('cursor-not-allowed')
    expect(result).toContain('flex')
    expect(result).toContain('items-center')
  })
})
