import React, { useEffect, useState } from "react";
import { Spinner, YStack, View, useWindowDimensions, Separator } from "tamagui";

import { Place } from "~/interfaces/mapInterfaces";
import { Optional } from "~/types/genericTypes";

import UpdateStatusSheet from "~/components/UpdateStatusSheet";
import PlaceSheet from "~/components/PlaceSheet";
import { ToiletStatusTypes } from "~/types/toiletTypes";
import updatePlace from "~/services/updatePlaces";

type PlaceSheetFrameProps = {
  place: Optional<Place>;
};

export default function PlaceSheetFrame({ place }: PlaceSheetFrameProps) {
  const [useUpdateWorkflow, setUseUpdateWorkflow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    if (place && showSpinner) {
      const timer = setTimeout(async () => {
        return await updatePlace(place).then((resp) => {
          setUseUpdateWorkflow(false);
          setShowSpinner(false);
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showSpinner]);
  if (!place) {
    return;
  }
  return useUpdateWorkflow ? (
    <>
      <UpdateStatusSheet
        place={place}
        workflow={{
          submit: (status: ToiletStatusTypes | string) => {
            setShowSpinner(true);
            place.toilets.mens.status = status as ToiletStatusTypes;
            place.toilets.mens.epochLastUpdated = Date.now();
          },
          cancel: () => setUseUpdateWorkflow(false),
        }}
      />
      {showSpinner ? (
        <View
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          backgroundColor={"black"}
          opacity={0.5}
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          <Spinner
            shadowRadius={5}
            shadowOpacity={0.5}
            opacity={100}
            scale={2}
            height="20%"
          />
        </View>
      ) : null}
    </>
  ) : (
    <PlaceSheet place={place} setUseUpdateWorkflow={setUseUpdateWorkflow} />
  );
}
