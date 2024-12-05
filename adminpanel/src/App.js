import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

import Authentication from "./components/Authentication"; 
import Workspace from "./components/ViewResponce"; 

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/auth" element={<Authentication />} /> 
            <Route exact path="/workspace" element={<Workspace />} /> 
            <Route exact path="/" element={<Home />} />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
