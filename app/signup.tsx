import React, { useContext, useEffect, useState } from "react";

import { router } from "expo-router";
import { Input, XStack } from "tamagui";
import { Button, Form, H4, Spinner, YStack, View } from "tamagui";

import { buttonStatusTypes, formInputFields } from "~/types/formTypes";

import * as verbiage from "~/assets/verbiage.json";
import { signUpUser } from "~/services/signUpUser";
import { UserContext } from "~/contexts/UserContext";

export default () => {
  const [status, setStatus] = useState<buttonStatusTypes>("off");
  const [submitText, setSubmitText] = useState(
    verbiage["button.submit.status.off"]
  );
  const [formFields, setFormFields] = useState<formInputFields>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const uc = useContext(UserContext);
  useEffect(() => {
    switch (status) {
      case "loading":
        setSubmitText(verbiage["button.submit.status.loading"]);
        let timer = setTimeout(() => {
          setStatus("submitted");
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      case "submitted":
        signUpUser(formFields)
          .then((user) => {
            uc.email = user.email;
            uc.loggedIn = true;
            uc.uid = user.uid;
            setStatus("success");
          })
          .catch((e) => {
            console.error("Error raised while trying to sign up:", e);
          });
        return;
      case "success":
        setSubmitText(verbiage["button.submit.status.submitted"]);
        timer = setTimeout(() => {
          router.replace("/(auth)/menus");
        }, 1000);
        return formFields.password === formFields.confirmPassword
          ? () => {
              clearTimeout(timer);
            }
          : setStatus("error");
      case "error":
        setSubmitText(verbiage["button.submit.status.error"]);
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
            <Input
              size="$4"
              flex={1}
              placeholder="email"
              onChangeText={(email) => {
                setFormFields({ ...formFields, email: email });
              }}
            />
          </XStack>
          <XStack paddingTop="$4">
            <Input
              size="$4"
              flex={1}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(password) => {
                setFormFields({ ...formFields, password: password });
              }}
            />
          </XStack>
          <XStack paddingTop="$4">
            <Input
              size="$4"
              flex={1}
              placeholder="confirm password"
              secureTextEntry={true}
              onChangeText={(confirmPassword) => {
                setFormFields({
                  ...formFields,
                  confirmPassword: confirmPassword,
                });
              }}
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
