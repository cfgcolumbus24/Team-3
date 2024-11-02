import PromptPage from "./PromptPage/PromptPage";
import SplashPage from "./SplashPage/SplashPage";
import PropLogin from "./PropLogin/PropLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<SplashPage />} />
          <Route path="/PropLogin" element={<PropLogin />} />
          {/* <Route path="/NotFound" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
