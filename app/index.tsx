import React, { useContext } from "react";

import "react-native-reanimated";
import "react-native-gesture-handler";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import { TamaguiProvider, Text, Button, YStack, H1, H6, View } from "tamagui";

import Title from "~/components/splash/Title";

import tamaguiConfig from "~/tamagui.config";
import SubTitle from "~/components/splash/Subtitle";
import { UserContext } from "~/contexts/UserContext";

type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const uc = useContext(UserContext);
  if (uc.loggedIn) {
    router.navigate("/(auth)/menus");
  }
  if (fontsLoaded) {
    return (
      <TamaguiProvider config={tamaguiConfig}>
        <View alignContent="center" justifyContent="center" flex={1}>
          <YStack alignContent="center" justifyContent="center">
            <YStack padding="$4">
              <Title />
              <SubTitle />
            </YStack>
            <YStack padding="$4" gap="$4" paddingTop="$5">
              <Button
                padding="$2"
                themeInverse
                onPress={() => router.push("/signup")}
              >
                <Text color="$white">Get Started</Text>
              </Button>
              <Button padding="$2" onPress={() => router.push("/login")}>
                <Text>Log In</Text>
              </Button>
            </YStack>
          </YStack>
        </View>
      </TamaguiProvider>
    );
  }
}
