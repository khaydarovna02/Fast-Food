import React from "react";
import { BuyurtmaContext } from "../../../context/buyurtmalar";
import ProductCardH from "../../ProductCardH";
import { Container, Wrapper } from "./style";

export const MenuH = () => {
  const [card] = BuyurtmaContext();
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
