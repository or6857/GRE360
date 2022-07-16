import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./components/signup/signup.js";
import Quiz from "./components/Quiz/Quiz.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
          <Signup />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
