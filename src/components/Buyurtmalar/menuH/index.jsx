import React from "react";
import { BuyurtmaContext } from "../../../context/buyurtmalar";
import ProductCardH from "../../ProductCardH";
import { Container, Wrapper } from "./style";

export const MenuH = () => {
  const [card] = BuyurtmaContext();
  return (
    <Container>
      <h1>yangi</h1>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <h1>qabul qilingan</h1>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <h1>jo'natilgan</h1>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <h1>yopilgan</h1>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default MenuH;
