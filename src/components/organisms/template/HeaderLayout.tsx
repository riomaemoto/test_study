import React, { FC, memo, ReactNode } from "react";
import { Header } from "../Layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
