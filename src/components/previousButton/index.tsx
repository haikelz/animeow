import { Button } from "@chakra-ui/react";
import { Page } from "src/interfaces";

const PreviousButton = ({ page, setPage }: Page) => {
  const handlePrevious = () => {
    setPage(page - 1);
  };

  return <Button onClick={handlePrevious}>Previous</Button>;
};

export default PreviousButton;
