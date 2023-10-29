import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "@/Portfolio";

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
