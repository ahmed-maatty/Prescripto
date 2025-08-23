import "../../styles/main.scss"
import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ToastContainer } from "react-toastify";

function Routes() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <RoutesContainer>
        <Route index path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </RoutesContainer>
      <Footer />
    </Router>
  );
}

export default Routes;
