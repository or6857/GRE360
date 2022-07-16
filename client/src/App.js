import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./components/signup/signup.js";
import Quiz from "./components/Quiz/Quiz.js";
import { AccountBox } from "./components/accountBox";

function App() {
  return (
    <Router>
      <div>
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
          {/* <Route exact path="/quiz" element={<Quiz />} /> */}
          <Route exact path="/login" element={<AccountBox />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
