import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "~hooks/useScroll";
import { backToTopAnimation } from "~lib/utils/animation";

type OffsetTop = {
  offsetTop: any;
};

type LinkRef = {
  linkRef: {
    current: any;
  };
};

export const BackToTop = ({ linkRef }: LinkRef) => {
  const scroll: number = useScroll();

  const handleClick = <T extends OffsetTop>(ref: T) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const height: number = 100;

  return (
    <AnimatePresence key={height}>
      {scroll > height && (
        <motion.div {...backToTopAnimation}>
          <Button colorScheme="blue" onClick={() => handleClick(linkRef.current)}>
            <ArrowUpIcon fontSize={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
