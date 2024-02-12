import React from "react";
import AppBar from "./components/AppBar";
import Login from "./pages/Login";
import Form from "./pages/Form";
import "./App.css";

import { useGlobalState } from "./store";

function App() {
  const [page] = useGlobalState("page");
  console.log(`page = ${page}`);
  return (
    <div>
      {page !== "login" && <AppBar />}
      {page === "login" && <Login />}
      {page === "form" && <Form />}
    </div>
  );
}

export default App;
