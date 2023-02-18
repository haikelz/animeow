import { PaginationProps } from "~interfaces";
import { Button } from "@chakra-ui/react";

export const NextButton = ({ page, setPage }: PaginationProps) => {
  return <Button onClick={() => setPage(page + 1)}>Next</Button>;
};
