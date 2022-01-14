import React from "react";
import Done from "../Generic/Done";
import Cancel from "../Generic/Cancel";
import { Container, IconWrapper, Info, Payme, Wrapper } from "./style";

export const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Info.OrderID>8534</Info.OrderID>
          <IconWrapper>
            <Info.Save />
          </IconWrapper>
        </Info>
        <Info border bottom>
          <Info.Clock />
          <Info.Time>00:22</Info.Time>
        </Info>
      </Wrapper>
      <Wrapper>
        <Info>
          <Info.User />
          <Info.UserName>
            Deveeprasad <br /> Acharya
          </Info.UserName>
        </Info>
        <Info bottom>
          <Info.Phone />
          <Info.Text>(+99 893) 461-41-88</Info.Text>
        </Info>
      </Wrapper>
      <Wrapper>
        <Info>
          <Info>
            <Info.Clipboard />
            <Info.Text>35,400 UZS</Info.Text>
          </Info>
          <Payme>
            <Payme.Icon />
            <Info.Text>Payme</Info.Text>
          </Payme>
        </Info>
        <Info bottom>
          <Info.Truck />
          <Info.Text>5,000 UZS</Info.Text>
        </Info>
        <Info bottom>
          <Info.Total>Umumiy summa</Info.Total>
        </Info>
        <Info.Summ>40,400 UZS</Info.Summ>
      </Wrapper>
      <Wrapper last>
        <Info>
          <Info.Total>Operator:</Info.Total>
          <Cancel />
        </Info>
        <Info.Text bolder>Komilova M</Info.Text>
        <Info bottom>
          <Info.Total>Filial:</Info.Total>
          <Done />
        </Info>
        <Info.Text bolder>
          Fast Food <br /> Maksim Gorkiy
        </Info.Text>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
