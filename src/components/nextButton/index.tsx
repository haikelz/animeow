import { Button } from "@chakra-ui/react";
import { Page } from "src/interfaces";

const NextButton = ({ page, setPage }: Page) => {
  const handleNext = () => {
    setPage(page + 1);
    console.log(page);
  };

  return <Button onClick={handleNext}>Next</Button>;
};

export default NextButton;