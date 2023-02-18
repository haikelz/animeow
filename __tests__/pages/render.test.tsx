import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import DetailAnime from "~pages/anime/detail/[id]";
import Home from "~pages/index";
import DetailManga from "~pages/manga/detail/[id]";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

const queryClient = new QueryClient();

describe("Home Page", () => {
  it("Should render home page properly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});

describe("Detail Manga Page", () => {
  it("Should render detail-manga page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DetailManga />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});

describe("Detail Anime Page", () => {
  it("Should render detail-anime page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DetailAnime />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
