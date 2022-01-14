import React from "react";
import ProductCard from "../../ProductCard";
import { Container, Wrapper } from "./style";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrapper>
      <Wrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrapper>
    </Container>
  );
};

export default Body;
