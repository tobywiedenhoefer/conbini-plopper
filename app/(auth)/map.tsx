import React, { useContext, useEffect, useState } from "react";

import { router } from "expo-router";
import { Sheet, YGroup } from "tamagui";

import UserLocationContext from "~/contexts/UserLocationContext";

import getPlaces from "~/services/getPlaces";
import { getRegionFromCoords } from "~/services/mapServices";
import { EligibleNearbyPlaces } from "~/services/googlePlacesApi";

import { Region, RequestType } from "~/types/mapTypes";
import { Optional } from "~/types/genericTypes";
import { Place } from "~/interfaces/mapInterfaces";

import Map from "~/components/Map";
import BackButton from "~/components/BackButton";
import PlaceSheetFrame from "~/components/PlaceSheetFrame";

export default () => {
  const context = useContext(UserLocationContext);
  const [requestType, setRequestType] = useState<RequestType>("GET_PLACES");
  const [region, setRegion] = useState<Region>(
    getRegionFromCoords(context.location?.coords!)
  );
  const [places, setPlaces] = useState<Array<Place>>([]);
  const [place, setPlace] = useState<Optional<Place>>(null);
  const [openModal, setOpenModal] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);
  useEffect(() => {
    (async () => {
      switch (requestType) {
        case "GET_PLACES":
          const resp = await getPlaces(
            EligibleNearbyPlaces.convenienceStores,
            context.location!.coords
          );
          setPlaces(resp);
          return;
        case "SET_PLACE":
          setOpenModal(true);
          return;
      }
    })();
    setRequestType(null);
  }, [requestType]);
  return (
    <YGroup>
      <Map
        region={getRegionFromCoords(context.location?.coords!)}
        places={places}
        fetching={fetchingData}
        setPlace={setPlace}
        setRequestType={setRequestType}
      />
      <BackButton router={router} />
      <Sheet
        open={openModal}
        forceRemoveScrollEnabled={openModal}
        modal={true}
        onOpenChange={setOpenModal}
        snapPoints={[50]}
        dismissOnSnapToBottom
        animation="medium"
      >
        <Sheet.Overlay
          animation="quick"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Frame>
          <PlaceSheetFrame place={place} />
        </Sheet.Frame>
      </Sheet>
    </YGroup>
  );
};
