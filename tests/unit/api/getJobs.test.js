import axios from "axios";

import getJobs from "@/api/getJobs";
import { beforeEach, expect, it } from "vitest";

vi.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Engineer",
        },
      ],
    });
  });

  it("fetches jobs that candidadtes cam apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://fakeapi.com/jobs");
  });

  it("extracts jobs from response", async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([{ id: 1, title: "Engineer" }]);
  });
});
