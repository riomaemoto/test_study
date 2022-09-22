import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../hooks/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
