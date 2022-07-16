import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./components/signup/signup.js";
import Quiz from "./components/Quiz/Quiz.js";
<<<<<<< HEAD
import Landing from "./components/Landing/landing.js";
=======
import { AccountBox } from "./components/accountBox";
>>>>>>> 47076a704cb384467fff6ca933cba9037d25da55

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="App">
        <Routes>
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/landing" element={<Landing />} />
=======
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
>>>>>>> 47076a704cb384467fff6ca933cba9037d25da55
        </Routes>
      </div>
    </Router>
  );
}

export default App;
