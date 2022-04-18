import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { route } from "./navcomponents";

const Navigator = () => {
  return (
    <Routes>
      {route.map((item) => {
        return <Route path={item.path} element={item.component} />;
      })}
    </Routes>
  );
};

export default Navigator;
