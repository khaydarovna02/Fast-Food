import React from "react";
import MenuV from "../menuV";
import MenuH from "../menuH";
import { Container } from "./style";

export const Body = (props) => {
  return <Container>{props.active ? <MenuH /> : <MenuV />}</Container>;
};

export default Body;
