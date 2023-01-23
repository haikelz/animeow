import { Button } from "@chakra-ui/react";
import { Page } from "@/interfaces";

export const NextButton = ({ page, setPage }: Page) => {
  return <Button onClick={() => setPage(page + 1)}>Next</Button>;
};
