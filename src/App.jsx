import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import LandingPage from "./pages/LandingPage";
import { Container } from "@mui/material";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/helper/PrivateRoute";
import PublicRoute from "./components/helper/PublicRoute";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="" element={<PrivateRoute element={<LandingPage />} />} />
          <Route
            restricted={true}
            path="/register"
            element={<PublicRoute element={<RegisterPage />} restricted={true} />}
          />
          <Route
            restricted={true}
            path="/login"
            element={<PublicRoute element={<LoginPage />} restricted={true} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
