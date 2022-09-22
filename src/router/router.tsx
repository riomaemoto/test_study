import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderLayout } from "../components/Layout/HeaderLayout";
import { Login } from "../components/pages/login";
import { Links } from "./links";

export const Router: VFC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
          {Links.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<HeaderLayout>{item.element}</HeaderLayout>}
              />
            );
          })}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Route>
      </Routes>
    </>
  );
});
