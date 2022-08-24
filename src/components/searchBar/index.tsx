import { Input } from "@chakra-ui/react";

type SetSearch = {
  setSearch: (value: string) => void;
};

type Event = {
  target: {
    value: string;
  };
};

const SearchBar = ({ setSearch }: SetSearch) => {
  const handleChange = (event: Event) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      onChange={handleChange}
      placeholder="Search...."
      border="2px"
      w={{ base: "full", md: "50%" }}
    />
  );
};

export default SearchBar;
