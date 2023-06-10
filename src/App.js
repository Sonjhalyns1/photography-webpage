import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
function App() {
  return(
    <>
      <Router>
        <Navbar />
          <Landing/>
          
          <About />
        
      </Router>
  </>
  )
  
}

export default App;
