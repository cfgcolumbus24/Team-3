import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromptPage from "./PromptPage/PromptPage";
import SplashPage from "./SplashPage/SplashPage";
import PropLogin from "./PropLogin/PropLogin";
import Roles from "./ChooseRole/Roles";
import PropDashboard from "./PropDashboard/PropDashboard";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<SplashPage />} />
          <Route path="/PropLogin" element={<PropLogin />} />
          <Route path="/PromptPage" element={<PromptPage />} />
          <Route path="/ChooseRole" element={<Roles />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
