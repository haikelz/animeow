import { PaginationProps } from "~interfaces";
import { Button } from "@chakra-ui/react";

export const PreviousButton = ({ page, setPage }: PaginationProps) => {
  return <Button onClick={() => setPage(page - 1)}>Previous</Button>;
};
