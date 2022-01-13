import React, { useState } from "react";
import { Container, Plus, Tab, Title, Toggle, Wrapper } from "./style";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTacActive] = useState(true);
  return (
    <Container>
      <Wrapper align>
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
      </Wrapper>
      <Wrapper>
        <Tab>
          <Tab.Item
            onClick={() => setIsActive("Yangi")}
            active={isActive === "Yangi"}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            onClick={() => setIsActive("Qabul qilingan")}
            active={isActive === "Qabul qilingan"}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            onClick={() => setIsActive("Jo'natilgan")}
            active={isActive === "Jo'natilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            onClick={() => setIsActive("Yopilgan")}
            active={isActive === "Yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align>
        <Toggle></Toggle>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
