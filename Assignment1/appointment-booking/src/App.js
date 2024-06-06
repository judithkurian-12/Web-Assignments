import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Booking from "./components/Booking";
import RequestStatus from "./components/RequestStatus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/request-status" element={<RequestStatus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
