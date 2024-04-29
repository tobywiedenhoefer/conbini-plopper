import React, { useState } from "react";
import {
  Button,
  Label,
  Separator,
  View,
  XStack,
  YStack,
  useWindowDimensions,
} from "tamagui";
import { X, Check } from "@tamagui/lucide-icons";

import { Place } from "~/interfaces/mapInterfaces";
import { Optional } from "~/types/genericTypes";
import { ToiletStatusTypes } from "~/types/toiletTypes";

import * as verbiage from "~/assets/verbiage.json";

type UpdateStatusSheetProps = {
  place: Optional<Place>;
  workflow: {
    submit: (status: ToiletStatusTypes) => void;
    cancel: () => void;
  };
};

export default function UpdateStatusSheet({
  place,
  workflow,
}: UpdateStatusSheetProps) {
  return !place ? null : (
    <YStack paddingTop="$2">
      <YStack alignItems="center" justifyContent="center" paddingTop="$4">
        <StatusButton status="status.open" submitAndClose={workflow.submit} />
        <StatusButton
          status="status.cleaning"
          submitAndClose={workflow.submit}
        />
        <StatusButton
          status="status.occupied"
          submitAndClose={workflow.submit}
        />
        <StatusButton status="status.closed" submitAndClose={workflow.submit} />
      </YStack>
      <YStack alignItems="center" justifyContent="center" paddingTop="$4">
        <YStack paddingVertical="$2" gap="$4" width="80%">
          <Button onPress={workflow.cancel}>Cancel</Button>
        </YStack>
      </YStack>
    </YStack>
  );
}

type SelectButtonProps = {
  status: ToiletStatusTypes;
  submitAndClose: (status: ToiletStatusTypes) => void;
};
const StatusButton = ({ status, submitAndClose }: SelectButtonProps) => {
  const dimensions = useWindowDimensions();
  const buttonHeight = dimensions.height / 15;
  const [confirmClicked, setConfirmClicked] = useState(false);
  return (
    <YStack paddingVertical="$2">
      <XStack width="80%">
        <View
          justifyContent="center"
          flex={1}
          alignItems="center"
          width="40%"
          borderTopStartRadius="$4"
          borderBottomStartRadius="$4"
          borderWidth={1}
          borderColor={"$borderColor"}
          backgroundColor="$backgroundFocus"
          height={buttonHeight}
        >
          <Label paddingLeft="$4" width="100%">
            {verbiage[`button.${status}`]}
          </Label>
        </View>
        {confirmClicked ? (
          <>
            <Button
              height={buttonHeight}
              width="30%"
              borderRadius={0}
              onPress={() => setConfirmClicked(false)}
              icon={<X />}
              scaleIcon={2}
            />
            <Separator width={1} borderColor="$gray" vertical />
            <Button
              height={buttonHeight}
              width="30%"
              borderTopEndRadius="$4"
              borderBottomEndRadius="$4"
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              onPress={() => {
                setConfirmClicked(false);
                submitAndClose(status);
              }}
              icon={<Check />}
              scaleIcon={2}
            />
          </>
        ) : (
          <Button
            height={buttonHeight}
            width="60%"
            borderTopStartRadius={0}
            borderBottomStartRadius={0}
            borderTopEndRadius="$4"
            borderBottomEndRadius="$4"
            onPress={() => setConfirmClicked(true)}
          >
            Change
          </Button>
        )}
      </XStack>
    </YStack>
  );
};
