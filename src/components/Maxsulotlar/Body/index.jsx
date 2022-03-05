import React from "react";
import { Container, Display, Image, Text, TitleWrap, Wrapper } from "./style";
import minilavash from "../../../assets/imgs/lavashmini.png";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";

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
      <Wrapper>
        <Display>
          <Image>
            <img src={minilavash} alt="lavashmini" />
          </Image>
          <Text title>Lavash mini</Text>
        </Display>
        <Text>Lavash</Text>
        <Text>18,000 UZS</Text>
        <Text>Kichkina lavash, bla bla</Text>
        <Display>
          <Edit />
          <Delete />
        </Display>
      </Wrapper>
    </Container>
  );
};

export default Body;
