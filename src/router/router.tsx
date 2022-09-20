import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Links } from "./links";

export const Router: VFC = memo(() => {
  return (
    <>
      <Routes>
        <Route path={Links[0].path} element={Links[0].element} />
        <Route path="/home">
          {Links.map((item) => {
            return (
              <Route key={item.path} path={item.path} element={item.element} />
            );
          })}
        </Route>
      </Routes>
    </>
  );
});
