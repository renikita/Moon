import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

import Authentication from "./components/Authentication"; 
import Workspace from "./components/ViewResponce"; 
import ResponseDashboard from "./components/ViewResponce"; // Assuming ResponseDashboard is the same as ViewResponce for now
import EventLog from "./components/EventLog"; // Placeholder for EventLog component

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
            <Route exact path="/admin/workspace" element={<Workspace />} />
            <Route exact path="/admin/response-dashboard" element={<ResponseDashboard />} />
            <Route exact path="/admin/eventlog" element={<EventLog />} />
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
