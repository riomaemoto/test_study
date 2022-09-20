import { Home } from "../components/pages/home";
import { Setting } from "../components/pages/setting";
import { UserManagement } from "../components/pages/userManagement";

export const Links = [
  { path: "/", element: <Home /> },
  { path: "/userManagement", element: <UserManagement /> },
  { path: "/setting", element: <Setting /> },
];
