import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromptPage from "./PromptPage/PromptPage";
import SplashPage from "./SplashPage/SplashPage";
import PropLogin from "./PropLogin/PropLogin";
import Roles from "./ChooseRole/Roles";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<SplashPage />} />
          <Route path="/PropLogin" element={<PropLogin />} />
          <Route path="/PromptPage" element={<PromptPage />} />
          <Route path="/ChooseRole" element={<Roles />} />
      </Routes>
    </Router>
  );
}

export default App;
