import React, { useEffect, useState } from "react";

import { router, useNavigation } from "expo-router";
import { Input, XStack, useWindowDimensions } from "tamagui";
import { Button, Form, H4, Spinner, YGroup, YStack, View } from "tamagui";

export default () => {
  const [status, setStatus] = useState<
    "off" | "loading" | "submitted" | "error"
  >("off");
  const [submitText, setSubmitText] = useState<
    "Submit" | "Loading" | "Redirecting"
  >("Submit");
  const navigation = useNavigation();
  useEffect(() => {
    switch (status) {
      case "loading":
        let timer = setTimeout(() => {
          setStatus("submitted");
          setSubmitText("Loading");
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      case "submitted":
        setSubmitText("Redirecting");
        timer = setTimeout(() => {
          router.replace("/(auth)/menus");
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
    }
  }, [status]);
  return (
    <View
      marginHorizontal="$3"
      alignContent="center"
      justifyContent="center"
      flex={1}
    >
      <Form
        onSubmit={() => setStatus("loading")}
        gap="$3"
        padding="$8"
        borderRadius="$4"
        borderWidth="1"
      >
        <YStack>
          <H4>Log In</H4>
          <XStack paddingTop="$4">
            <Input size="$4" flex={1} placeholder="username" />
          </XStack>
          <XStack paddingTop="$4">
            <Input
              size="$4"
              flex={1}
              placeholder="password"
              secureTextEntry={true}
            />
          </XStack>
        </YStack>
        <Form.Trigger paddingTop="$2" asChild>
          <Button
            icon={
              status === "loading" || status === "submitted"
                ? () => <Spinner />
                : undefined
            }
          >
            {submitText}
          </Button>
        </Form.Trigger>
      </Form>
    </View>
  );
};
