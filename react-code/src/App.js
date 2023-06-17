import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./screens/home/home";

import { Auth } from "./screens/auth/auth";
import { Splash } from "./screens/onboarding/splash/splash";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Splash></Splash>}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="auth" element={<Auth />} />
            {/* <Route path="contact" element={<Onboarding />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
