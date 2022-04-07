import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/counter";
import Header from "./Components/header";
import Homepage from "./Components/homepage";
import SignInSide from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/SignInSide" element={<SignInSide />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
