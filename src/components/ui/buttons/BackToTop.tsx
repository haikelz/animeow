import { backToTopAnimation } from "@/lib/utils/animation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { LinkRef, OffsetTop } from "@/interfaces";
import { useScroll } from "@/hooks/useScroll";

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
