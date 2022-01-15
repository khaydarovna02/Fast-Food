import React from "react";
import Done from "../Generic/Done";
import Cancel from "../Generic/Cancel";
import { Container, IconWrapper, Info, Wrapper } from "./style";

export const ProductCard = ({ value }) => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Info.OrderID>{value.orderId}</Info.OrderID>
          <IconWrapper>
            <Info.Save />
          </IconWrapper>
        </Info>
        <Info border bottom>
          <Info.Clock />
          <Info.Time>
            {`${value.time.getHours()}:${value.time.getMinutes()}`}
          </Info.Time>
        </Info>
      </Wrapper>
      <Wrapper>
        <Info>
          <Info.User />
          <Info.UserName>
            {value.user.name} <br /> {value.user.surname}
          </Info.UserName>
        </Info>
        <Info bottom>
          <Info.Phone />
          <Info.Text>{value.user.phone}</Info.Text>
        </Info>
      </Wrapper>
      <Wrapper>
        <Info>
          <Info>
            <Info.Clipboard />
            <Info.Text>{value.summ.buyurtmaSumm} UZS</Info.Text>
          </Info>
          <Info.Payme>
            <Info.PaymeIcon />
            <Info.Text>Payme</Info.Text>
          </Info.Payme>
        </Info>
        <Info bottom>
          <Info.Truck />
          <Info.Text>{value.summ.truckSumm} UZS</Info.Text>
        </Info>
        <Info bottom>
          <Info.Total>Umumiy summa</Info.Total>
        </Info>
        <Info.Summ>{value.summ.totalSumm} UZS</Info.Summ>
      </Wrapper>
      <Wrapper last>
        <Info>
          <div>
            <Info.Total>Operator:</Info.Total>
            <Info.Text bolder>{value.operator.name}</Info.Text>
          </div>
          <Info.Icon>
            <Cancel />
          </Info.Icon>
        </Info>
        <Info bottom>
          <div>
            <Info.Total>Filial:</Info.Total>
            <Info.Text bolder>
              {value.filial.title} <br /> {value.filial.location}
            </Info.Text>
          </div>
          <Info.Icon>
            <Done />
          </Info.Icon>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
