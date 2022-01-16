import React from "react";
import Done from "../Generic/Done";
import Cancel from "../Generic/Cancel";
import { Container, IconWrapper, Info, Wrapper } from "./style";

export const ProductCardV = ({ value }) => {
  return (
    <Container>
      <Wrapper align>
        <Info>
          <Info.OrderID>{value.orderId}</Info.OrderID>
          <IconWrapper>
            <Info.Save />
          </IconWrapper>
        </Info>
        <Info right>
          <Info.Clock />
          <Info.Time>
            {`${value.time.getHours()}:${value.time.getMinutes()}`}
          </Info.Time>
        </Info>
      </Wrapper>
      <Wrapper>
        <Info>
          <Info.User />
          <div>
            <Info.UserName>
              {value.user.name} {value.user.surname}
            </Info.UserName>
            <Info.Phone>{value.user.phone}</Info.Phone>
          </div>
        </Info>
      </Wrapper>
      <Wrapper column>
        <Info>
          <Info.Total>Umumiy summa</Info.Total>
          <Info right>
            <Info.PaymeIcon />
            <Info.Text>Payme</Info.Text>
          </Info>
        </Info>
        <Info.Summ>{value.summ.totalSumm} UZS</Info.Summ>
      </Wrapper>
      <Wrapper last column>
        <Info>
          <Info col>
            <Info.Total>Operator:</Info.Total>
            <Info.Text bolder>{value.operator.name}</Info.Text>
          </Info>
          <Info.Icon>
            <Cancel />
          </Info.Icon>
        </Info>
        <Info top>
          <Info col>
            <Info.Total>Filial:</Info.Total>
            <Info.Text bolder>
              {value.filial.title} <br /> {value.filial.location}
            </Info.Text>
          </Info>
          <Info.Icon>
            <Done />
          </Info.Icon>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ProductCardV;
