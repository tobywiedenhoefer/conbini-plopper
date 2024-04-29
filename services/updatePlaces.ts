import { doc, setDoc, GeoPoint } from "firebase/firestore";

import { Place } from "~/interfaces/mapInterfaces";
import { ToiletInformation } from "~/types/toiletTypes";

import { db } from "~/services/firebase";
import USE_MOCK_DATA from "~/services/mockData";

type DatabasePlace = {
  coords: GeoPoint;
  rating: number;
  toilets: {
    mens: ToiletInformation;
    womens: ToiletInformation;
  };
};

export default async function updatePlace(place: Place): Promise<boolean> {
  if (USE_MOCK_DATA) {
    console.log("Using mock data. Returning true for updatePlace.");
    return true;
  }
  const updateDoc: DatabasePlace = {
    coords: new GeoPoint(place.coords.latitude, place.coords.longitude),
    rating: place.rating || -1,
    toilets: place.toilets,
  };
  await setDoc(doc(db, "places", place.id), updateDoc);
  return true;
}
