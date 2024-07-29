import SubNav from '@/components/SubNav.vue'
import { render, screen } from '@testing-library/vue'
import { describe, expect } from 'vitest'

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText('666')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does NOT displays job count', () => {
      render(SubNav, {
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })

      const jobCount = screen.queryByText('666')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
