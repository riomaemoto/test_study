import { Home } from "../components/pages/home";
import { Login } from "../components/pages/login";
import { Setting } from "../components/pages/setting";
import { UserManagement } from "../components/pages/userManagement";

export const Links = [
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/userManagement", element: <UserManagement /> },
  { path: "/setting", element: <Setting /> },
];
