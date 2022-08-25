import { useScroll } from "src/hooks/useScroll";
import { backToTopAnimation } from "src/utils/animation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { LinkRef, OffsetTop } from "src/interfaces";

const BackToTop = ({ linkRef }: LinkRef) => {
  const [scroll] = useScroll();

  const handleClick = <T extends OffsetTop>(ref: T) => {
    window.scrollTo({ top: ref.offsetTop, left: 0, behavior: "smooth" });
  };

  const height: number = 100;

  return (
    <AnimatePresence key={height}>
      {scroll > height && (
        <motion.div {...backToTopAnimation}>
          <Button
            colorScheme="blue"
            onClick={() => handleClick(linkRef.current)}
          >
            <ChevronUpIcon fontSize="2xl" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
