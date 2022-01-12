import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150vh;
  min-width: 280px;
  padding: 28px 24px 40px 0;
  background: #ffffff;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  position: sticky;
  top: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 64px 20px;
`;

LogoWrapper.Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

Text.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
`;

Text.Desc = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ chiqish }) => (chiqish ? "row" : "column")};
  align-items: ${({ chiqish }) => chiqish && "center"};
  margin-top: ${({ chiqish }) => chiqish && "auto"};
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 48px;
`;

export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  border-radius: 0px 6px 6px 0px;
  transition: all 0.2s;

  .icon {
    width: 36px;
    height: 36px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
    margin: 0 9px 0 40px;
  }
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  padding: 10px;
  background: #f6f6f6;
  border-radius: 6px;
  margin-left: 40px;
`;

IconWrapper.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
  margin-left: 9px;
`;

export const activeStyle = {
  color: "white",
  background: "#FCB600",
  padding: "6px 0",
};
