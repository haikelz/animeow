import { SearchBar } from "~ui/input/SearchBar";
import { fireEvent, render } from "@testing-library/react";

describe("Search Bar", () => {
  it("Should up date on change", () => {
    const setSearch = jest.fn((value) => {});
    const { queryByPlaceholderText } = render(<SearchBar setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search....") as HTMLInputElement;

    fireEvent.change(searchInput, {
      target: {
        value: "search",
      },
    });

    expect(searchInput.value).toBe("search");
  });
});
