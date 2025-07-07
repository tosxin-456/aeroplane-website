import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TravelHomepage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact Us";
import Services from "./pages/Services";
import FAQPage from "./pages/FAQ";
// import FAQ from "./pages/FAQ";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<TravelHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
