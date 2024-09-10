import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/Dashboard" Component={Dashboard} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/Projects" Component={Projects} />
      </Routes>
    </div>
  );
}

export default App;
