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

function Routes() {
  return (
    <Router>
      <Navbar />
      <RoutesContainer>
        <Route index path={"/"} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </RoutesContainer>
      <Footer />
    </Router>
  );
}

export default Routes;
