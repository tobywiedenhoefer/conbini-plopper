import axios, { AxiosResponse } from "axios";

import { Coords, GoogleMapsAPIStatus } from "~/types/mapTypes";
import { Optional, OptionalString } from "~/types/genericTypes";
import { GoogleMapsPlace } from "~/interfaces/mapInterfaces";

import { GOOGLE_MAPS_API_KEY } from "~/services/apiSecrets";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

export enum EligibleNearbyPlaces {
  convenienceStores = "Convenience Stores",
  lawson = "Lawson",
  sevenEleven = "Seven Eleven",
  familyMart = "Family Mart",
}

type ValidInputs = `${EligibleNearbyPlaces}`;

export type GoogleApiResponseType = {
  html_attributions: Array<string>;
  results: Array<GoogleMapsPlace>;
  status: GoogleMapsAPIStatus;
  error_message: OptionalString;
  info_messages: Optional<Array<string>>;
  next_page_token: OptionalString;
};

export default async function getGoogleMapsPlaces(
  keyword: ValidInputs,
  coords: Coords
): Promise<AxiosResponse<GoogleApiResponseType>> {
  const location = `location=${coords.latitude}%2C${coords.longitude}`;
  const radius = `radius=1500`;
  const placeType = "type=convenience_store";
  const key = `key=${GOOGLE_MAPS_API_KEY}`;
  const url = `${BASE_URL}?keyword=${keyword.replace(
    " ",
    "%20"
  )}&${location}&${radius}&${placeType}&${key}`;
  return axios.get(url);
}
