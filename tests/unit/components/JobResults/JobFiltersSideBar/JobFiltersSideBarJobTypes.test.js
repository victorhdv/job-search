import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import userEvent from "@testing-library/user-event";
import JobFiltersSideBarJobTypes from "@/components/JobResults/JobFiltersSideBar/JobFiltersSideBarJobTypes.vue";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

describe("JobFiltersSideBarJobTypes", () => {
  const renderJobFiltersSideBarJobTypes = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    const jobStore = useJobsStore();
    render(JobFiltersSideBarJobTypes, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    return { jobStore, userStore };
  };

  it("renders unique list of job types from jobs", async () => {
    const { jobStore } = renderJobFiltersSideBarJobTypes();

    jobStore.UNIQUE_JOB_TYPES = new Set(["full time", "part time"]);

    const button = screen.getByRole("button", { name: /job types/i });
    await userEvent.click(button);

    const jobTypesListItem = screen.getAllByRole("listitem");
    const organizations = jobTypesListItem.map((node) => node.textContent);

    expect(organizations).toEqual(["full time", "part time"]);
  });

  it("communicates that users has selected checkbox", async () => {
    const { jobStore, userStore } = renderJobFiltersSideBarJobTypes();

    jobStore.UNIQUE_JOB_TYPES = new Set(["full time", "part time"]);

    const button = screen.getByRole("button", { name: /job types/i });
    await userEvent.click(button);

    const partTimeCheckbox = screen.getByRole("checkbox", {
      name: /part time/i,
    });

    await userEvent.click(partTimeCheckbox);

    expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith([
      "part time",
    ]);
  });
});
