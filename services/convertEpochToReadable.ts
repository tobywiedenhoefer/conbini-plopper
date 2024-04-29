import * as verbiage from "~/assets/verbiage.json";

const timeStamps = {
  minute: 60,
  tenMinutes: 600,
  anHour: 60 * 60,
  threeHours: 60 * 60 * 3,
  aDay: 60 * 60 * 24,
  twoDays: 60 * 60 * 24 * 2,
  aWeek: 60 * 60 * 24 * 7,
  aMonth: 60 * 60 * 24 * 28,
  twoMonths: 60 * 60 * 24 * 28 * 2,
};

export default function convertEpochToReadable(
  e: number | undefined | null
): string {
  if (!e) {
    return "never";
  }
  const then = new Date(e).getTime();
  const now = Date.now();
  const seconds = Math.ceil(Math.abs(now - then) / 1000);
  if (seconds < timeStamps.minute) {
    return verbiage["sheet.timestamp.seconds"];
  } else if (seconds < timeStamps.tenMinutes) {
    return verbiage["sheet.timestamp.minutes"];
  } else if (seconds < timeStamps.anHour) {
    return verbiage["sheet.timestamp.hour"];
  } else if (seconds < timeStamps.threeHours) {
    return verbiage["sheet.timestamp.hours"];
  } else if (seconds < timeStamps.twoDays) {
    return verbiage["sheet.timestamp.day"];
  } else if (seconds < timeStamps.aWeek) {
    return verbiage["sheet.timestamp.days"];
  } else if (seconds < timeStamps.twoMonths) {
    return verbiage["sheet.timestamp.month"];
  } else {
    return verbiage["sheet.timestamp.forever"];
  }
}
