import Main from "./components/Main";
import Sign from "./components/Sign/Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
  <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
