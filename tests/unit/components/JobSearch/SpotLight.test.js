import { render, screen } from "@testing-library/vue";
import axios from "axios";
import SpotLight from "@/components/JobSearch/SpotLight.vue";
import { describe, expect } from "vitest";
import { data } from "autoprefixer";

vi.mock("axios");

describe("SpotLight", () => {
  const mockSpotLightsResponse = (spotlight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "some img",
          title: "some title",
          description: "some description",
          ...spotlight,
        },
      ],
    });
  };

  it("provides image to parent component", async () => {
    const spotlight = { img: "img" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template v-slot:default="slotProps">
        <h1>{{slotProps.img}}</h1>
        </template>`,
      },
    });
    const text = await screen.findByText("img");
    expect(text).toBeInTheDocument();
  });

  it("provides title to parent component", async () => {
    const spotlight = { title: "title" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template v-slot:default="slotProps">
        <h1>{{slotProps.title}}</h1>
        </template>`,
      },
    });
    const text = await screen.findByText("title");
    expect(text).toBeInTheDocument();
  });

  it("provides description to parent component", async () => {
    const spotlight = { description: "description" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template v-slot:default="slotProps">
        <h1>{{slotProps.description}}</h1>
        </template>`,
      },
    });
    const text = await screen.findByText("description");
    expect(text).toBeInTheDocument();
  });
});
