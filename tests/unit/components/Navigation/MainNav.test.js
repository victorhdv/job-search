import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/Navigation/MainNav.vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";

const pinia = createTestingPinia();

const renderMainNav = () => {
  const mockRoute = {
    name: "Home",
  };

  render(MainNav, {
    global: {
      mocks: {
        $route: mockRoute,
      },
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
      plugins: [pinia],
    },
  });
};

describe("MainNav", () => {
  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Vale Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent,
    );
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students",
    ]);
  });

  describe("when uses logs in", () => {
    it("displays user profile image", async () => {
      renderMainNav();

      const userStore = useUserStore();

      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      userStore.isLoggedIn = true;

      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
