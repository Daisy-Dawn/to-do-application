import { Header } from "../Header/Header";
import "./RootLayout.css";
import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
