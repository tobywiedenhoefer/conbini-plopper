import React from "react";
import { Router } from "expo-router";
import { Button, View } from "tamagui";
import { ChevronLeft } from "@tamagui/lucide-icons";

export default function BackButton({ router }: { router: Router }) {
  return (
    <View position="absolute" top={60} left={20}>
      <Button
        icon={<ChevronLeft />}
        scaleIcon={2}
        circular={true}
        onPress={() => {
          router.back();
        }}
        borderWidth={1}
        borderColor="$accentColor"
        alignItems="center"
        justifyContent="center"
        size="$4"
        shadowRadius={5}
        shadowOpacity={0.5}
      />
    </View>
  );
}
