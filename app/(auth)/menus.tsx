import React, { useEffect, useState } from "react";

import * as Location from "expo-location";

import { Button, Spinner, View, YStack, useWindowDimensions } from "tamagui";
import { Map, Settings } from "@tamagui/lucide-icons";

import { useUserLocationContext } from "~/contexts/UserLocationContext";
import { router } from "expo-router";

export default function Menus() {
  const dimensions = useWindowDimensions();
  const context = useUserLocationContext();
  const [disableMapNavigation, setDisableMapNavigation] = useState(
    !context.location
  );
  useEffect(() => {
    if (!context.location) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied.");
          return;
        }
        context.location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Lowest,
        }).then((resp) => {
          setDisableMapNavigation(!resp);
          return resp;
        });
      })();
    }
    while (router.canGoBack()) {
      router.back();
      if (!router.canGoBack()) {
        router.replace("/(auth)/menus");
      }
    }
  }, []);
  return (
    <YStack alignContent="center" flex={1} justifyContent="center">
      <View>
        <Button
          height={dimensions.height / 2}
          marginVertical="$2"
          marginHorizontal="$4"
          icon={disableMapNavigation ? <Spinner size="large" /> : <Map />}
          scaleIcon={5}
          backgroundColor={
            disableMapNavigation ? "$blue12" : "$accentBackground"
          }
          onPress={() => router.push("/(auth)/map")}
          animation="bouncy"
          pressStyle={{ scale: 0.9 }}
        />
      </View>
      <View paddingBottom="$2">
        <Button
          height={dimensions.height / 4}
          marginVertical="$2"
          marginHorizontal="$4"
          icon={<Settings />}
          scaleIcon={4}
          animation="bouncy"
          pressStyle={{ scale: 0.9 }}
        />
      </View>
    </YStack>
  );
}
