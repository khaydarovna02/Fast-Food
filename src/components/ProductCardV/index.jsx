import React from "react";
import Done from "../Generic/Done";
import Cancel from "../Generic/Cancel";
import { Container, IconWrapper, Info, Wrapper } from "./style";
import { BuyurtmaContext } from "../../context/buyurtmalar";

export const ProductCardV = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();

  const onCancel = (value) => {
    let filtered = card[value.category].filter((data) => data.id !== value.id);
    let newData = { ...card, [value.category]: filtered };
    setBuyurtmaData(newData);
  };

  const onDone = (value) => {
    console.log(value);
  };

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
          <Info.Icon onClick={() => onCancel(value)}>
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
          <Info.Icon onClick={() => onDone(value)}>
            <Done />
          </Info.Icon>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ProductCardV;
