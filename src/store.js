import { createStore } from "redux";
import counterReducer from "./services/Reducers/counterReducer";

const store = createStore(counterReducer);
export default store;
