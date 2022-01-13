import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 22px 40px;
  background: white;
  width: ${({ align }) => (align ? "200px" : "100%")};
  border-left: 2px solid #e5e5e5;
`;

export const Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: #20d472;
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;

export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 48px;
  padding: 6px;
  background: #edeff3;
  border-radius: 24px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 36px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  color: #9c9fa2;
  mix-blend-mode: normal;
  cursor: pointer;
  background: ${({ active }) => active && "white"};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: ${({ active }) => active && "18px"};
  color: ${({ active }) => active && "#2d3a45"};
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  display: flex;
  width: 97px;
  height: 48px;
  padding: 6px;
  background: #edeff3;
  border-radius: 24px;
`;
