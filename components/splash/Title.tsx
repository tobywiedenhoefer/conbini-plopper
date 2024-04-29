import React, { useRef } from "react";

import { H1 } from "tamagui";
import { MotiView } from "moti";

import * as verbiage from "~/assets/verbiage.json";

export default function Title() {
  return (
    <MotiView
      from={{
        translateY: -10,
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: 2500,
        delay: 500,
      }}
    >
      <H1 alignSelf="center" letterSpacing={0.25}>
        {verbiage["splash.title"]}
      </H1>
    </MotiView>
  );
}
