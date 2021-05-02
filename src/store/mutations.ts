import { storeState } from "@/type";
import { SET_TOKEN } from "./constant";

const mutations = {
  [SET_TOKEN](state: storeState, payload: string) {
    state.token = payload;
  },
};

export { mutations };
