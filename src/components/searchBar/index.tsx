import { Input } from "@chakra-ui/react";
import { Event } from "src/interfaces";

type SetSearch = {
  setSearch: (value: string) => void;
};

const SearchBar = ({ setSearch }: SetSearch) => {
  const handleChange = <T extends Event>(event: T) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      variant="filled"
      onChange={handleChange}
      placeholder="Search...."
      border="2px"
      w={{ base: "full", md: "50%" }}
    />
  );
};

export default SearchBar;
