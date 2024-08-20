import { render, screen } from '@testing-library/vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import userEvent from '@testing-library/user-event'

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it(' directs user to job results page with query params', async () => {
      const push = vi.fn()
      const $routerMock = { push }

      render(JobSearchForm, {
        global: {
          mocks: {
            $router: $routerMock
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })
      await userEvent.type(roleInput, 'Vue Developer')

      const locationInput = screen.getByRole('textbox', {
        name: /Where?/i
      })
      await userEvent.type(locationInput, 'Dallas')

      const submitButton = screen.getByRole('button', {
        name: /search/i
      })
      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: { role: 'Vue Developer', location: 'Dallas' }
      })
    })
  })
})
