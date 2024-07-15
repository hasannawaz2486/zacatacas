import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbarr from "./Components/Navbarr";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import QualityOfLife from "./Pages/QualityOfLife";
import Invest from "./Pages/Invest";
import News from "./Pages/News";


function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/qualityoflife" element={<QualityOfLife />} />
        <Route path="/invest" element={<Invest />} /> */}

        <Route path="/" element={<Invest />} />
        <Route path="/qualityoflife" element={<QualityOfLife />} />
        <Route path="/invest" element={<Home />} />
        <Route path="/News" element={<News />} />
 
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
