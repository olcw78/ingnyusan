import { map } from "nanostores";

export interface Status {
  isServer: boolean;
}

export const status = map<Status>({
  isServer: false
});
