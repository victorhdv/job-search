import HeaderContaineir from "@/components/Shared/HeaderContaineir.vue";
import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";

describe("headerContainer", () => {
  it("allows parent component to provide the title", () => {
    render(HeaderContaineir, {
      slots: {
        title: "<h2> Some title</h2>",
      },
    });
    expect(screen.getByText("Some title")).toBeInTheDocument();
  });

  it("allows parent component to provide the subtitle", () => {
    render(HeaderContaineir, {
      slots: {
        subtitle: "<h2> Some subtitle</h2>",
      },
    });
    expect(screen.getByText("Some subtitle")).toBeInTheDocument();
  });
});
