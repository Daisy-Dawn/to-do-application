import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { RootLayout } from "./components/RootLayout/RootLayout";
import { NoPage } from "./pages/NoPage/NoPage";
import { Contact } from "./pages/Contact/Contact";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
