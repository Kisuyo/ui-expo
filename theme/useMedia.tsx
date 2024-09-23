import { useMediaQuery } from "usehooks-ts";
import { screens } from "./screens";

export const useMedia = () => {
  const isXs = useMediaQuery(`(min-width: ${screens.xs})`);
  const isSm = useMediaQuery(`(min-width: ${screens.sm})`);
  const isMd = useMediaQuery(`(min-width: ${screens.md})`);
  const isLg = useMediaQuery(`(min-width: ${screens.lg})`);
  const isXl = useMediaQuery(`(min-width: ${screens.xl})`);

  const isMobile = !isMd;

  return { isXs, isSm, isMd, isLg, isXl, isMobile };
};
