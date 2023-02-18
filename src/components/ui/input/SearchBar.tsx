import { Box, Input, Kbd } from "@chakra-ui/react";
import { memo, useRef } from "react";
import { useKeydown } from "~hooks/useKeydown";

type SetSearch = {
  setSearch: (value: string) => void;
};

export const SearchBar = ({ setSearch }: SetSearch) => {
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

memo(SearchBar);
