import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

import Authentication from "./components/Authentication"; 
import Workspace from "./components/ViewResponce"; 

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/auth" />;
// };

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/auth" element={<Authentication />} /> 
            <Route exact path="/admin/workspace" element={
              // <PrivateRoute>
                <Workspace />
              // </PrivateRoute>
            } />
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/admin/eventlog" element={
              <PrivateRoute>
                <EventLog />
              </PrivateRoute>
            } /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
