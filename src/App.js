import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <header className="app-header">Note App</header>
        <div className="app-content">
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
