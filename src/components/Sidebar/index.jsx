import React from "react";
import { Container, Item, Link, LogoWrapper, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.png";
import { sidebar } from "../../utils/sidebar";

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoWrapper.Img src={logo} alt="logo" />
        <div>
          <LogoWrapper.Title>Fast Food</LogoWrapper.Title>
          <LogoWrapper.Desc>Online maxsulot sotuvi</LogoWrapper.Desc>
        </div>
      </LogoWrapper>
      <Wrapper>
        {sidebar.map(({ id, title, path, Icon, hidden }) => {
          return (
            <Item>
              <Link key={id} to={path}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
