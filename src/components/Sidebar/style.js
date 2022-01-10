import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  padding: 28px 24px 40px 0;
  border: 1px solid red;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-bottom: 64px;
  padding: 0 24px;
`;

LogoWrapper.Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

LogoWrapper.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
`;

LogoWrapper.Desc = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  margin-bottom: 20px;
  height: 48px;
  padding: 6px 40px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;

  .icon {
    width: 36px;
    height: 36px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
    margin-right: 9px;
  }
`;

export const IconWrapper = styled.img`
  width: 16px;
  height: 16px;
`;
