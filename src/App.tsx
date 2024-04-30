import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "@/Routes/MainPagesRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
