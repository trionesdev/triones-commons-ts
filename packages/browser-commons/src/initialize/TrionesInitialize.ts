import _ from "lodash";

export type TrionesProps = {
  signInUri?: string;
  indexUri?: string;
  requestBaseUrl?: string;
};

export class Triones {
  static initialize(props: TrionesProps) {
    _.set(window, "__TRIONES__.props", props);
  }
}
