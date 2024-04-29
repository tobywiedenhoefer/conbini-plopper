import { AxiosResponse } from "axios";
import { collection, query, where, getDocs } from "firebase/firestore";

import { Coords } from "~/types/mapTypes";
import { Optional } from "~/types/genericTypes";
import { DocumentDataMaping, Place } from "~/interfaces/mapInterfaces";

import getGoogleMapsPlaces, {
  EligibleNearbyPlaces,
  GoogleApiResponseType,
} from "~/services/googlePlacesApi";
import { db } from "~/services/firebase";
import USE_MOCK_DATA, { mockNearbyPlaces } from "~/services/mockData";

export default async function getPlaces(
  placesToSearch: EligibleNearbyPlaces,
  coords: Coords
): Promise<Array<Place>> {
  if (USE_MOCK_DATA) {
    console.log("Using mock data. Returning mockNearbyPlaces for getPlaces.");
    return mockNearbyPlaces.austin;
  }
  const googleMapsResp: AxiosResponse<GoogleApiResponseType> =
    await getGoogleMapsPlaces(placesToSearch, coords);
  const informations: Map<string, Place> = new Map();
  if (googleMapsResp.status !== 200 || !googleMapsResp.data) {
    console.error(
      `maps status ${googleMapsResp.status} & data ${googleMapsResp.data} for coords ${coords}`
    );
    return [];
  } else if (!googleMapsResp.data) {
    console.error(
      `did not receive googleMapsResponse data ${googleMapsResp.data} for coords ${coords}`
    );
    return [];
  }
  googleMapsResp.data.results.forEach(async (place) => {
    if (!place.place_id || !place.name || !place.geometry) {
      return;
    }
    const completePlace: Place = {
      id: place.place_id,
      mapsObject: place,
      rating: null,
      toilets: {
        mens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
        womens: {
          count: 0,
          status: "status.null",
          epochLastUpdated: 1709689255088,
        },
      },
      coords: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      geometry: place.geometry,
      name: place.name,
    };
    console.log("place: ", completePlace);
    informations.set(place.place_id, completePlace);
  });
  const place_ids = Array.from(informations.keys());
  if (!place_ids) {
    return Array.from(informations.values());
  }
  const collectionRef = collection(db, "conbini-plopper");
  const q = query(collectionRef, where("id", "in", place_ids));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    const data: Optional<DocumentDataMaping> = doc.data() as DocumentDataMaping;
    if (!data || !doc.id || !informations.has(doc.id)) {
      return;
    }
    console.log("id", doc.id, "data", data);
    const locPlace = informations.get(doc.id)!;
    locPlace.toilets = data.toilets;
  });
  return Array.from(informations.values());
}
