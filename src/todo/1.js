//@flow
// import { getProp } from "./2";
type StateType = {
  prop1: string,
  prop2: string
};

const state1 = {
  prop1: "q"
  // prop2: "q"
};

const state2 = {
  prop2: "q"
  // prop1: "q"
};

export const getProp = (state) => state.prop1;

const prop1 = getProp(state1);
const prop2 = getProp(state2);

(prop1: string);
(prop2: string);
