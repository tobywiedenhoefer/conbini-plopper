import React from "react";

import { Paragraph } from "tamagui";

import { Place } from "~/interfaces/mapInterfaces";
import convertEpochToReadable from "~/services/convertEpochToReadable";

type PlaceSheetTimeTextProps = {
  place: Place;
};

export default function PlaceSheetTimeText({ place }: PlaceSheetTimeTextProps) {
  const timeText = convertEpochToReadable(place.toilets.mens.epochLastUpdated);
  return <Paragraph size="$3">{timeText}</Paragraph>;
}
