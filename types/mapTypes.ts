export type Coords = { latitude: number; longitude: number };

export type LatLng = { lat: number; lng: number };

export type GooglePlaceType = "convenience_store"; // only supporting this one for now

export type AddressComponents = {
  long_name: string;
  short_name: string;
  types: Array<GooglePlaceType>;
};

export type GoogleMapsAPIStatus =
  | "OK"
  | "ZERO_RESULTS"
  | "INVALID_REQUEST"
  | "OVER_QUERY_LIMIT"
  | "REQUEST_DENIED"
  | "UNKNOWN_ERROR";

export type GoogleMapsGeography = {
  location: LatLng;
  viewport: { northeast: LatLng; southwest: LatLng };
};

export type GoogleMapsAddressComponents = {
  long_name: string;
  short_name: string;
  types: Array<string>;
};

export type Region = Coords & { latitudeDelta: number; longitudeDelta: number };

export type BusinessStatus =
  | "OPERATIONAL"
  | "CLOSED_TEMPORARILY"
  | "CLOSED_PERMANENTLY";

export type RequestType = "SET_PLACE" | "GET_PLACES" | "SET_PLACES" | null;
