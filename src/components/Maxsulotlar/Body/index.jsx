import React from "react";
import { Container, Display, Image, Text, TitleWrap, Wrapper } from "./style";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import { card } from "../../../mock/drag and drop";

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
      {card.map((value) => (
        <Wrapper>
          <Display>
            <Image>
              <img src={value.img} alt="lavash" />
            </Image>
            <Text>{value.name}</Text>
          </Display>
          <Text>{value.category}</Text>
          <Text title>{value.cost} UZS</Text>
          <Text>
            {value.qoshimcha.type}, {value.qoshimcha.other}
          </Text>
          <Display>
            <Edit />
            <Delete />
          </Display>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Body;
