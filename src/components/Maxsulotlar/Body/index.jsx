import React from "react";
import { Container, TitleWrap, Wrapper } from "./style";

export const Body = () => {
  return (
    <Container>
      <TitleWrap>
        <TitleWrap.Item first>Maxsulot</TitleWrap.Item>
        <TitleWrap.Item>Kategoriya</TitleWrap.Item>
        <TitleWrap.Item>Narxi</TitleWrap.Item>
        <TitleWrap.Item>Qo'shimcha</TitleWrap.Item>
        <TitleWrap.Item>Action</TitleWrap.Item>
      </TitleWrap>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Body;
