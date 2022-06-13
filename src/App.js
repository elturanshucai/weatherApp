import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
