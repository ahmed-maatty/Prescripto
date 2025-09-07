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
import AllDoctors from "../pages/AllDoctors";
import About from "../pages/About";
import DoctorDetails from "../pages/DoctorDetails";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import MyAppointments from "../pages/MyAppointments";

function Routes() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <RoutesContainer>
        <Route index path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/all-doctors"} element={<AllDoctors />} />
        <Route path={"/doctor/:id"} element={<DoctorDetails />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/my-appointments"} element={<MyAppointments />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </RoutesContainer>
      <Footer />
    </Router>
  );
}

export default Routes;
