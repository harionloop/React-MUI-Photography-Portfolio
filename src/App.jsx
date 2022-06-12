import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./settings/theme";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import PortfolioWedding from "./Pages/Portfolio/wedding";
import PortfolioStreets from "./Pages/Portfolio/streets";
import PortfolioCreative from "./Pages/Portfolio/creative";
import Contact from "./Pages/Contact";
import LearnMe from "./Pages/LearnMe";
import Footer from "./Pages/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-wedding" element={<PortfolioWedding />} />
        <Route path="/portfolio-streets" element={<PortfolioStreets />} />
        <Route path="/portfolio-creative" element={<PortfolioCreative />} />
        <Route path="/learn-me" element={<LearnMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
