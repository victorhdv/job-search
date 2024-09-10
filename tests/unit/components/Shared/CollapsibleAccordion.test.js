import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { describe, expect } from "vitest";

describe("Collapsible Accordion", () => {
  const renderCollapsibleAccordion = (config = {}) => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Teste",
      },
      slots: {
        default: "<h3>conteudo</h3>",
      },
      ...config,
    });
  };

  it("removs child component", async () => {
    const props = { header: "Teste" };
    const slots = { slots: "<h3>conteudo</h3>" };
    const config = { props, slots };
    renderCollapsibleAccordion(config);

    expect(screen.queryByText("conteudo")).not.toBeInTheDocument;

    const button = screen.getByRole("button", { name: /Teste/i });

    await userEvent.click(button);
    expect(screen.queryByText("conteudo")).toBeInTheDocument;
  });

  describe("When parent does not provide custom child content", () => {
    it("render default content", async () => {
      const props = { header: "Teste" };
      const config = { props };
      renderCollapsibleAccordion(config);

      const button = screen.getByRole("button", { name: /Teste/i });
      await userEvent.click(button);
      expect(screen.queryByText("EMPTY")).toBeInTheDocument;
    });
  });
});
