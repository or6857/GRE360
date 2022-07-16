import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
