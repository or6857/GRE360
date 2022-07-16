import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Quiz from "./components/Quiz/Quiz.js";
import Landing from "./components/Landing/landing.js";
import Dashboard from "./components/Dashboard/dashboard.js";
import { AccountBox } from "./components/accountBox";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/quiz"
            element={
              localStorage.getItem("authToken") ? (
                <Quiz />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route exact path="/login" element={<AccountBox />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
