import { useState, useEffect } from "react";
import { ResponsiveImages } from "../typescript/interfaces";

export const useResponsiveImages = (ImagesObject: ResponsiveImages) => {
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
