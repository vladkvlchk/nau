import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Admissions from "./pages/Admissions";
import FacultyWebsites from "./pages/FacultyWebsites";
import Main from "./pages/Main";
import OfficialSources from "./pages/OfficialSources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty-websites" element={<FacultyWebsites />} />
        <Route path="/official-sources" element={<OfficialSources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
