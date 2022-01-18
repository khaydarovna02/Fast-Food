import React, { useState } from "react";
import {
  Container,
  IconsWrapper,
  MenuH,
  MenuV,
  Plus,
  Tab,
  Title,
  Toggle,
  ToggleClone,
  Wrapper,
} from "./style";

export const Navbar = (props) => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <Container>
      <Wrapper align order="first">
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
        <ToggleClone>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuH active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuV active={!isTabActive} />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order="second">
        <Tab active={isTabActive}>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Yangi");
            }}
            active={isActive === "Yangi"}
          >
            Yangi
          </Tab.Item>

          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Qabul qilingan");
            }}
            active={isActive === "Qabul qilingan"}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Jo'natilgan");
            }}
            active={isActive === "Jo'natilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Yopilgan");
            }}
            active={isActive === "Yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>

      <Wrapper align order="third">
        <Toggle>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuH active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuV active={!isTabActive} />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
