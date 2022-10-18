import { Box, Input, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { useKeydown } from "src/hooks/useKeydown";

type SetSearch = {
  setSearch: (value: string) => void;
};

const SearchBar = ({ setSearch }: SetSearch) => {
  const ref = useRef<string | any>("");
  useKeydown({ ref: ref, isShiftKey: true, key1: "Enter", key2: "Escape" });

  return (
    <>
      <Input
        ref={ref}
        variant="filled"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search...."
        fontWeight="semibold"
        border="2px"
        mb={{ base: 0, md: 2 }}
        w={{ base: "full", md: "50%" }}
      />
      <Box display={{ base: "none", md: "block" }}>
        <span>
          <Kbd>Shift</Kbd> + <Kbd>Enter</Kbd>
        </span>
      </Box>
    </>
  );
};

export default SearchBar;
