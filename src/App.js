import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact-page/contact-page";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
