export type ToiletStatusTypes =
  | "status.closed"
  | "status.cleaning"
  | "status.open"
  | "status.occupied"
  | "status.null";

export type ToiletInformation = {
  count: number;
  status: ToiletStatusTypes;
  epochLastUpdated: number;
};
