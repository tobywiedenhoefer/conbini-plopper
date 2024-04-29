import { Coords, Region } from "~/types/mapTypes";
import { TOKYO_REGION } from "./mockData";

export const getRegionFromCoords = (coords: Coords): Region => {
  const { latitudeDelta, longitudeDelta } = TOKYO_REGION;
  return {
    latitude: coords.latitude,
    longitude: coords.longitude,
    latitudeDelta: TOKYO_REGION.latitudeDelta,
    longitudeDelta: TOKYO_REGION.longitudeDelta,
  };
};
