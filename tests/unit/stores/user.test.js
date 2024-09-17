import { useUserStore } from "@/stores/user";
import { createPinia, setActivePinia } from "pinia";
import { describe, expect, it } from "vitest";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("state", () => {
  it("keep track if user is logged in", () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });

  it("stores the selected organizations to filter jobs", () => {
    const store = useUserStore();
    expect(store.selectedOrganizations).toEqual([]);
  });
});

describe("actions", () => {
  describe("loginUser", () => {
    it("logs the user in", () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations chosen to filter jobs", () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(["org 1", "org 2"]);
      expect(store.selectedOrganizations).toEqual(["org 1", "org 2"]);
    });
  });
});
