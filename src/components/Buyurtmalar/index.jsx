import React from "react";
import { Body } from "./Body";
import Navbar from "./Navbar";
import { Container } from "./style";

export const Buyurtma = ({ location }) => {
  return (
    <Container>
      <Navbar />
      <Body />
    </Container>
  );
};

export default Buyurtma;
