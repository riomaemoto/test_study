import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/login";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Login />
      </Route>
    </Routes>
  );
});
