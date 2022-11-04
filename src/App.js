import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact-page/contact-page";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/linktree" element={<LandingPage />} />
      <Route path="/linktree/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
