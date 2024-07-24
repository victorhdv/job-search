import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Vale Careers')
    expect(companyName).toBeInTheDocument()
  })
})
