import React from "react";

import { H6 } from "tamagui";

import * as verbiage from "~/assets/verbiage.json";

export default function SubTitle() {
  return (
    <H6 paddingTop="$3" marginHorizontal="$2" marginRight="$4">
      {verbiage["splash.subtitle"]}
    </H6>
  );
}
