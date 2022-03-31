import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Components/Display/Display";
import Form from "./Components/Form/Form";
const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
