import { Home } from "../components/pages/home";
import { Setting } from "../components/pages/setting";
import { UserManagement } from "../components/pages/userManagement";

export const Links = [
  { path: "home", element: <Home /> },
  { path: "home/userManagement", element: <UserManagement /> },
  { path: "home/setting", element: <Setting /> },
];
