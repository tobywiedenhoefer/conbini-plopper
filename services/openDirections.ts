import { Platform } from "react-native";
import { Linking } from "react-native";

import { Place } from "~/interfaces/mapInterfaces";

export default function openDirections(place: Place): void {
  const scheme = Platform.select({
    ios: "maps://0,0?q=",
    android: "geo:0,0?q=",
  });
  const latLng = `${place.geometry.location.lat},${place.geometry.location.lng}`;
  const label = place.name;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });
  Linking.openURL(url!);
}
