import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
