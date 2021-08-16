import React from "react";
import { Provider } from "react-redux";
import wrapper from "../store/store";

const Test = ({ Component, store }) => {
  return (
    // <Provider store={store}>
    <Component />
    // </Provider>
  );
};

export default wrapper.withRedux(Test);
