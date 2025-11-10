// import { transmission } from "three/tsl";
"use client";

import FluidGlass from "../FluidGlass";

<div style={{ height: "600px", position: "relative" }}>
  <FluidGlass
    mode="bar" // or "bar", "cube" "lens"
    // lensProps={{
    //   scale: 0.25,
    //   ior: 1.15,
    //   thickness: 5,
    //   chromaticAberration: 0.1,
    //   anisotropy: 0.01,
    // }}
    barProps={{
      scale: 0.1,
      ior: 1,
      thickness: 8,
      chromaticAberration: 0.11,
      anisotropy: 0.01,
      transmission: 0.9,
      roughness: 0,
    }}
    // cubeProps={} // add specific props if using cube mode
  />
</div>;
