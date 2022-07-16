import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup.js";
import Quiz from "./components/Quiz/Quiz.js";
import Landing from "./components/Landing/landing.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
