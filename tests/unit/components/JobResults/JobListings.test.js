import JobListings from "@/components/JobResults/JobListings.vue";
import { screen, render } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { describe, expect } from "vitest";
import { useJobsStore } from "@/stores/jobs";
import { createTestingPinia } from "@pinia/testing";

const pinia = createTestingPinia();

const renderJobListings = (routeOptions = {}) => {
  const $route = { query: {}, ...routeOptions };
  return render(JobListings, {
    global: {
      mocks: {
        $route,
      },
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
      plugins: [pinia],
    },
  });
};

describe("JobListings", () => {
  it("fetches jobs", () => {
    renderJobListings({ query: { page: "5" } });
    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("creates a joblisting for 10 jobs", async () => {
    renderJobListings({ query: { page: "1" } });
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});

    const jobListings = await screen.findAllByRole("listitem");

    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      renderJobListings({ query: { page: undefined } });
      expect(screen.getByText("Page 1")).toBeInTheDocument();
    });
  });

  describe("when params include page number", () => {
    it("displays page number", () => {
      renderJobListings({ query: { page: "5" } });
      expect(screen.getByText("Page 5")).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      renderJobListings({ query: { page: "1" } });
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      const listItens = await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(listItens).toHaveLength(10);
      expect(previousLink).not.toBeInTheDocument();
    });

    it("show link to next page", async () => {
      renderJobListings({ query: { page: "1" } });
      const jobStore = useJobsStore();
      jobStore.jobs = Array(20).fill({});

      const listItens = await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(listItens).toHaveLength(10);
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      renderJobListings({ query: { page: "10" } });
      const jobStore = useJobsStore();
      jobStore.jobs = Array(100).fill({});

      const listItens = await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(listItens).toHaveLength(10);
      expect(nextLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      renderJobListings({ query: { page: "10" } });
      const jobStore = useJobsStore();
      jobStore.jobs = Array(100).fill({});

      const listItens = await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(listItens).toHaveLength(10);
      expect(previousLink).toBeInTheDocument();
    });
  });
});
