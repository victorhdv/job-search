import JobListing from "@/components/JobResults/JobListing.vue";
import { screen, render } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Vue and Me",
    locations: ["Buenos Aires", "Oslo"],
    minimumQualifications: ["technologies", "applications"],
    ...jobProps,
  });

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProps,
        },
      },
    });
  };

  it("Renders job tittle", () => {
    const jobProp = createJobProps();
    renderJobListing(jobProp);
    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });

  it("Renders job organization", () => {
    const jobProp = createJobProps({ organization: "VueTube" });
    renderJobListing(jobProp);
    expect(screen.getByText("VueTube")).toBeInTheDocument();
  });

  it("renders job location", () => {
    const jobProps = createJobProps({ locations: ["Orlando", "Jacksonville"] });
    renderJobListing(jobProps);
    expect(screen.getByText(/Orlando/)).toBeInTheDocument();
    expect(screen.getByText(/Jacksonville/)).toBeInTheDocument();
  });

  it("renders job qualification", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });
    renderJobListing(jobProps);
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Develop")).toBeInTheDocument();
  });
});
