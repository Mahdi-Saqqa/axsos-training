import React from "react";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:variable" element={<Dynamic />} />
        <Route path="/:variable/:color" element={<Dynamic />} />
        <Route path="/:variable/:color/:color2" element={<Dynamic />} />
      </Routes>
    </div>
  );
}

export default App