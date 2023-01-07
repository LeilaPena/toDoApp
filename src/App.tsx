import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Menu, Main, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <div className="container">
          <Outlet />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;
