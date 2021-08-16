import reducers from "../reducers";
import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

const configureSotre = () => {
  return createStore(reducers, {}, composeWithDevTools());
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development,",
});

export default wrapper;
