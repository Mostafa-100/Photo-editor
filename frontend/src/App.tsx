import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;