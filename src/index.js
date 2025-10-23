import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // App.js가 있는 경우

// 기본적인 React 애플리케이션을 렌더링
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
