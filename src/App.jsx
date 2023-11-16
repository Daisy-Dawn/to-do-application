import "./App.css";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider, createRoutesFromChildren} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { RootLayout } from "./components/RootLayout/RootLayout";
import { NoPage } from "./pages/NoPage/NoPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="register" element={<Register />}></Route>
    <Route path="login" element={<Login />}></Route>
    <Route path="dashboard" element={<Dashboard />}></Route>
    <Route path="*" element={<NoPage />}></Route>

  </Route>
))

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
