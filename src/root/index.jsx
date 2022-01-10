import React from "react";
import { Container } from "./style";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

export const Root = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
      </Router>
    </Container>
  );
};

export default Root;
