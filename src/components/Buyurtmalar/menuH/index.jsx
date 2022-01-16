import React from "react";
import { card } from "../../../mock/card";
import ProductCardH from "../../ProductCardH";
import { Container, Wrapper } from "./style";

export const MenuH = () => {
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default MenuH;
