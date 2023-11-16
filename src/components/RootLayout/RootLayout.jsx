import { Header } from "../Header/Header";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";

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
