import MainNavigation from "../utilities/MainNavigation";
import { Outlet } from "react-router-dom";
import AuthProvider from "../store/AuthProvider";

const RootLayout = () => {
  return (
    <AuthProvider>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
};

export default RootLayout;
