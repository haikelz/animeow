import { Button } from "@chakra-ui/react";
import { Page } from "src/interfaces";

const NextButton = ({ page, setPage }: Page) => {
  return <Button onClick={() => setPage(page + 1)}>Next</Button>;
};

export default NextButton;
