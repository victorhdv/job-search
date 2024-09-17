import SubNav from "@/components/Navigation/SubNav.vue";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs";

describe("SubNav", () => {
  const renderSubNav = (routeName) => {
    const pinia = createTestingPinia();
    const jobStore = useJobsStore();

    render(SubNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    return { jobStore };
  };

  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      const { jobStore } = renderSubNav("JobResults");
      const numberOfJobs = 16;
      jobStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(numberOfJobs).fill({});

      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT displays job count", () => {
      const { jobStore } = renderSubNav("Home");

      const numberOfJobs = 16;
      jobStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(numberOfJobs).fill({});

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
