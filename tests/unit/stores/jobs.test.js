import { createPinia, setActivePinia } from "pinia";

import { useJobsStore } from "@/stores/jobs";
import axios from "axios";
import { describe, expect, it } from "vitest";
import { useUserStore } from "@/stores/user";

vi.mock("axios");

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores job listings", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("FETCH_JOBS", () => {
    it("makes API request and stores received jobs", async () => {
      axios.get.mockResolvedValue({ data: ["Job 1", "Job 2"] });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });
});

describe("getters", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("UNIQUE_ORGANIZATIONS", () => {
    it("find unique organizations", () => {
      const store = useJobsStore();
      store.jobs = [
        { organization: "Google" },
        { organization: "Amazon" },
        { organization: "Google" },
      ];

      const result = store.UNIQUE_ORGANIZATIONS;

      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("find unique job types", () => {
      const store = useJobsStore();
      store.jobs = [
        { jobType: "intern" },
        { jobType: "part-time" },
        { jobType: "intern" },
      ];

      const result = store.UNIQUE_JOB_TYPES;

      expect(result).toEqual(new Set(["intern", "part-time"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs related to checked organizations", () => {
      const jobstore = useJobsStore();
      jobstore.jobs = [
        { organization: "google" },
        { organization: "amazon" },
        { organization: "microsoft" },
      ];

      const useStore = useUserStore();
      useStore.selectedOrganizations = ["google", "amazon"];

      const result = jobstore.FILTERED_JOBS_BY_ORGANIZATIONS;
      expect(result).toEqual([
        { organization: "google" },
        { organization: "amazon" },
      ]);
    });

    describe("user has not selected any organization", () => {
      it("returns all jobs", () => {
        const jobstore = useJobsStore();
        jobstore.jobs = [
          { organization: "google" },
          { organization: "amazon" },
          { organization: "microsoft" },
        ];

        const useStore = useUserStore();
        useStore.selectedOrganizations = [];

        const result = jobstore.FILTERED_JOBS_BY_ORGANIZATIONS;
        expect(result).toEqual([
          { organization: "google" },
          { organization: "amazon" },
          { organization: "microsoft" },
        ]);
      });
    });
  });
});

describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
  it("identifies jobs related to checked job types", () => {
    const jobstore = useJobsStore();
    jobstore.jobs = [
      { jobType: "intern" },
      { jobType: "part-time" },
      { jobType: "full-time" },
    ];

    const useStore = useUserStore();
    useStore.selectedJobTypes = ["intern", "part-time"];

    const result = jobstore.FILTERED_JOBS_BY_JOB_TYPES;

    expect(result).toEqual([{ jobType: "intern" }, { jobType: "part-time" }]);
  });

  describe("user has not selected any job type", () => {
    it("returns all job types", () => {
      const jobstore = useJobsStore();
      jobstore.jobs = [
        { jobType: "intern" },
        { jobType: "part-time" },
        { jobType: "full-time" },
      ];

      const useStore = useUserStore();
      useStore.selectedJobTypes = [];

      const result = jobstore.FILTERED_JOBS_BY_JOB_TYPES;

      expect(result).toEqual([
        { jobType: "intern" },
        { jobType: "part-time" },
        { jobType: "full-time" },
      ]);
    });
  });
});
