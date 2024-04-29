import { Optional, OptionalString } from "~/types/genericTypes";
import {
  AddressComponents,
  BusinessStatus,
  Coords,
  GoogleMapsGeography,
} from "../types/mapTypes";
import { ToiletInformation } from "~/types/toiletTypes";

export interface GoogleMapsPlace {
  address_components?: Optional<AddressComponents>;
  adr_address?: OptionalString;
  business_status: Optional<BusinessStatus>;
  formatted_address?: OptionalString;
  geometry: Optional<GoogleMapsGeography>;
  icon_mask_uri?: OptionalString;
  name: OptionalString;
  place_id: OptionalString;
  types: Optional<Array<string>>;
  url?: OptionalString;
  icon?: OptionalString;
  icon_background_color?: OptionalString;
  icon_mask_base_uri?: OptionalString;
  opening_hours?: Optional<Object>;
  photos?: Optional<Array<Array<Object>>>;
  plus_code?: Optional<Object>;
  rating?: number;
  reference?: OptionalString;
  scope?: OptionalString;
  user_ratings_total?: number;
  vicinity?: OptionalString;
  price_level?: number;
}

export interface Place {
  id: string;
  mapsObject: GoogleMapsPlace;
  geometry: GoogleMapsGeography;
  name: string;
  rating: Optional<number>;
  toilets: {
    mens: ToiletInformation;
    womens: ToiletInformation;
  };
  coords: Coords;
}

export interface DocumentDataMaping {
  coords: Coords;
  rating: number;
  toilets: {
    mens: ToiletInformation;
    womens: ToiletInformation;
  };
}
