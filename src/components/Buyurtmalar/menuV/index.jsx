import React from "react";
import { card } from "../../../mock/card";
import ProductCardV from "../../ProductCardV";
import { Container, Header, Total, Wrapper } from "./style";

export const MenuV = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Header.Title>Yangi</Header.Title>
          <Header.Counter>4</Header.Counter>
        </Header>
        <Total>
          <Total.Icon green />
          <Total.Summ>12,230,000 UZS</Total.Summ>
        </Total>
        {card.yangi.map((value) => (
          <ProductCardV key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Header>
          <Header.Title>Qabul qilingan</Header.Title>
          <Header.Counter>2</Header.Counter>
        </Header>
        <Total>
          <Total.Icon blue />
          <Total.Summ>12,230,000 UZS</Total.Summ>
        </Total>
        {card.qabul.map((value) => (
          <ProductCardV key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Header>
          <Header.Title>Jo'natilgan</Header.Title>
          <Header.Counter>8</Header.Counter>
        </Header>
        <Total>
          <Total.Icon yellow />
          <Total.Summ>2,500,000 UZS</Total.Summ>
        </Total>
        {card.jonatilgan.map((value) => (
          <ProductCardV key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Header>
          <Header.Title>Yopilgan</Header.Title>
          <Header.Counter>12</Header.Counter>
        </Header>
        <Total>
          <Total.Icon purple />
          <Total.Summ>10,230,000 UZS</Total.Summ>
        </Total>
        {card.yopilgan.map((value) => (
          <ProductCardV key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default MenuV;