import React from "react";

import { Button, H2, H4, Text, View, YStack } from "tamagui";

import { Place } from "~/interfaces/mapInterfaces";

import openDirections from "~/services/openDirections";
import PlaceSheetTimeText from "./PlaceSheetTimeText";

import * as verbiage from "~/assets/verbiage.json";

type PlaceSheetProps = {
  place: Place;
  setUseUpdateWorkflow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlaceSheet({
  place,
  setUseUpdateWorkflow,
}: PlaceSheetProps) {
  return (
    <YStack>
      <YStack alignItems="center" justifyContent="center" padding="$4">
        <H2 paddingVertical="$4">{place.name}</H2>
        <H4 paddingBottom="$4">
          {verbiage[`sheet.${place.toilets.mens.status}`]}
        </H4>
        <PlaceSheetTimeText place={place} />
      </YStack>
      <View alignItems="center" justifyContent="center">
        <View
          borderBottomWidth={1}
          borderBottomColor={"$accentColor"}
          width={"80%"}
        />
      </View>
      <YStack alignItems="center" justifyContent="center" paddingTop="$4">
        <YStack padding="$4" gap="$4" width="80%">
          <Button onPress={() => openDirections(place)}>
            <Text>Directions</Text>
          </Button>
          <Button onPress={() => setUseUpdateWorkflow(true)}>
            <Text>Update Status</Text>
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}
