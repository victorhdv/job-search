import { createPinia, setActivePinia } from "pinia";

import { useJobsStore } from "@/stores/jobs";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("state", () => {
  it("stores job listings", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});
