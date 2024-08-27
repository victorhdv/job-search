import JobListings from "@/components/JobResults/JobListings.vue";
import { screen, render } from "@testing-library/vue";
import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";

vi.mock("axios");

describe("JobListings", () => {
  const renderJobListings = () => {
    render(JobListings, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    renderJobListings();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a joblisting for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    renderJobListings();

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(15);
  });
});
