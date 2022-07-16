import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup.js";
import Quiz from "./components/Quiz/Quiz.js";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path="/quiz" element={<Quiz />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Signup />
  );
}

export default App;
