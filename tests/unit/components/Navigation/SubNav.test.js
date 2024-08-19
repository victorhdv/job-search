import SubNav from '@/components/Navigation/SubNav.vue'
import { render, screen } from '@testing-library/vue'

describe('SubNav', () => {
  const renderSubNav = (routeName) => {
    render(SubNav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      renderSubNav('JobResults')

      const jobCount = screen.getByText('666')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does NOT displays job count', () => {
      renderSubNav('Home')

      const jobCount = screen.queryByText('666')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
