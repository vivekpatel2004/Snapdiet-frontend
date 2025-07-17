import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Result from "./Components/Result";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Handle smooth scroll when hash changes
  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Retry after short delay if element not found yet
          setTimeout(handleScroll, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Delay scroll only until page finishes loading
    const scrollTimeout = setTimeout(() => {
      handleScroll();
    }, 100); // small delay ensures DOM is rendered

    return () => clearTimeout(scrollTimeout);
  }, [location]);

  // Simulate loading effect
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== "/result" && <Navbar />}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <div id="about"><About /></div>
                <div id="services"><Services /></div>
                <div id="cards"><Cards /></div>
                <div id="contact"><Contact /></div>
                <Footer />
              </main>
            }
          />
          <Route path="/result" element={<Result />} />
        </Routes>
      )}
    </>
  );
}

export default App;
