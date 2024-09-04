import { createPinia, setActivePinia } from "pinia";

import { useJobsStore } from "@/stores/jobs";
import axios from "axios";

vi.mock("axios");

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("state", () => {
  it("stores job listings", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    it("makes API request and stores received jobs", async () => {
      axios.get.mockResolvedValue({ data: ["Job 1", "Job 2"] });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });
});
