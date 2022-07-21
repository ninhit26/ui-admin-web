import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginFrom from "./components/login/login";
import ListFrom from "./components/view/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<ListFrom />} />
        <Route path="/" element={<LoginFrom />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
