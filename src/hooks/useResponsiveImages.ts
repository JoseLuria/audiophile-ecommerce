import { useState, useEffect } from "react";

interface UseScreenParams {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const useResponsiveImages = (ImagesObject: UseScreenParams) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);

  if (screenSize && screenSize < 768) {
    return ImagesObject.mobile;
  } else if (screenSize && screenSize < 1024) {
    return ImagesObject.tablet;
  } else if (screenSize && screenSize >= 1024) {
    return ImagesObject.desktop;
  }
};
