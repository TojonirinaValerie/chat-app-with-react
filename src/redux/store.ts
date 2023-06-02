import { createStore } from "redux";
import globalReducer from ".";

const store = createStore(globalReducer);

export default store;