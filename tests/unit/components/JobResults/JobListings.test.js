import JobListings from "@/components/JobResults/JobListings.vue";
import { screen, render } from "@testing-library/vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";
import { describe, expect } from "vitest";

vi.mock("axios");

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
    },
  });
};

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });

    renderJobListings({ query: { page: "5" } });

    const baseUrl = import.meta.env.VITE_APP_API_URL;

    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/jobs`);
  });

  it("creates a joblisting for 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });

    renderJobListings({ query: { page: "1" } });

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
      axios.get.mockResolvedValue({ data: Array(10).fill({}) });

      renderJobListings({ query: { page: "1" } });

      const listItens = await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(listItens).toHaveLength(10);
      expect(previousLink).not.toBeInTheDocument();
    });

    it("show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(20).fill({}) });

      renderJobListings({ query: { page: "1" } });

      const listItens = await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(listItens).toHaveLength(10);
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(100).fill({}) });

      renderJobListings({ query: { page: "10" } });

      const listItens = await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(listItens).toHaveLength(10);
      expect(nextLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(100).fill({}) });

      renderJobListings({ query: { page: "10" } });

      const listItens = await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(listItens).toHaveLength(10);
      expect(previousLink).toBeInTheDocument();
    });
  });
});
