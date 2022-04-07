import React, { useEffect, useState } from "react";

import Header from "./header";
import Products from "./Products";
import SignInSide from "./SignIn";
import SignUp from "./SignUp";
import { Router, Routes, Route } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Products />
    </div>
  );
}

export default Homepage;
