import React from "react";
import { useState } from "react/cjs/react.development";
import { Body } from "./Body";
import Navbar from "./Navbar";
import { Container } from "./style";

export const Buyurtma = ({ location }) => {
  const [active, setActive] = useState;
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyurtma;
