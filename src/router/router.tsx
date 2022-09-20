import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Links } from "./links";

export const Router: VFC = memo(() => {
  return (
    <>
      <Routes>
        {Links.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
});
