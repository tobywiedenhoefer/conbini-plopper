import { createTamagui } from "tamagui";
import { config as defaultConfig } from "@tamagui/config/v3";

const config = createTamagui(defaultConfig);

type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
