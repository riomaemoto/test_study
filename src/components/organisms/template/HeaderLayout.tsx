import React, { FC, memo, ReactNode } from "react";

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
