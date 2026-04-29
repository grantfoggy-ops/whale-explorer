declare module "react-leaflet-cluster" {
  import type { PropsWithChildren } from "react";

  type MarkerClusterGroupProps = PropsWithChildren<{
    chunkedLoading?: boolean;
    iconCreateFunction?: (cluster: { getChildCount: () => number }) => unknown;
  }>;

  export default function MarkerClusterGroup(props: MarkerClusterGroupProps): JSX.Element;
}
