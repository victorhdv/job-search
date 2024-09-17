import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import userEvent from "@testing-library/user-event";
import JobFiltersSideBarOrganizations from "@/components/JobResults/JobFiltersSideBar/JobFiltersSideBarOrganizations.vue";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

describe("JobFiltersSideBarOrganizations", () => {
  const renderJobFiltersSideBarOrganizations = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    const jobStore = useJobsStore();
    render(JobFiltersSideBarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    return { jobStore, userStore };
  };

  it("renders unique list of organizations from jobs", async () => {
    const { jobStore } = renderJobFiltersSideBarOrganizations();

    jobStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);

    const organizationListItem = screen.getAllByRole("listitem");
    const organizations = organizationListItem.map((node) => node.textContent);

    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  it("communicates that ures has sleted checkbox", async () => {
    const { jobStore, userStore } = renderJobFiltersSideBarOrganizations();

    jobStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);

    const googleCheckbox = screen.getByRole("checkbox", { name: /Google/i });

    await userEvent.click(googleCheckbox);

    expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith([
      "Google",
    ]);
  });
});
