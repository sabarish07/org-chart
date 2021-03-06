import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Org from "./components/Org";
import reportWebVitals from "./reportWebVitals";
import useGlobalState from "./store/useGlobalState";
import Context from "./store/context";

const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <Org />
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
