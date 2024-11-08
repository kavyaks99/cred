"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children, orientation = "vertical" }) => {
  console.log({ orientation });
  return (
    <ReactLenis
      options={{
        duration: 1,
        wheelMultiplier: 1.5,
        orientation,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
