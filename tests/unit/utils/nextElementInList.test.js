import nextElementInList from '@/utils/nextElementInList'
import { describe, expect } from 'vitest'

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'
    const result = nextElementInList(list, value)
    expect(result).toBe('D')
  })
})

describe('when elements is at the end', () => {
  it('locates next element at the start of the list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'E'
    const result = nextElementInList(list, value)
    expect(result).toBe('A')
  })
})
