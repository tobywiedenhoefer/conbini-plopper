import React from "react";

import "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="map" options={{ gestureEnabled: false }} />
      <Stack.Screen name="menus" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
