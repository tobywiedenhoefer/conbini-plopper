import React from "react";

import { Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Spinner, Sheet, Text } from "tamagui";

import { Region, RequestType } from "~/types/mapTypes";
import { Optional } from "~/types/genericTypes";
import { Place } from "~/interfaces/mapInterfaces";

type MapProps = {
  region: Region;
  places: Array<Place>;
  fetching: boolean;
  setPlace: React.Dispatch<React.SetStateAction<Optional<Place>>>;
  setRequestType: React.Dispatch<React.SetStateAction<RequestType>>;
};

export default function Map({
  places,
  region,
  fetching,
  setPlace,
  setRequestType,
}: MapProps) {
  return (
    <View>
      <GestureHandlerRootView style={{ height: "100%" }}>
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            overflow: "hidden",
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={region}
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              title={place.name}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
              onPress={() => {
                setPlace(place);
                setRequestType("SET_PLACE");
              }}
            />
          ))}
        </MapView>
      </GestureHandlerRootView>
    </View>
  );
}
