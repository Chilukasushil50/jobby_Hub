import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
export const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
