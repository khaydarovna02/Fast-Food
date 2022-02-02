import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import { ReactComponent as filter } from "../../../assets/icons/filter.svg";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  //   flex: ${({ first }) => (first ? "1" : "4")};
  width: 100%;
  width: ${({ first }) => (first ? "205px" : "100%")};
  padding: 22px 35px;
  background: #ffffff;
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

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  min-width: 300px;
  height: 48px;
  background: #edeff3;
  color: #2d3a45;
  border-radius: 24px;
`;

Search.Input = styled.input`
  border-style: none;
  outline: none;
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.4;
  background: #edeff3;
`;

Search.Icon = styled(search)`
  width: 16px;
  height: 16px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  background: #edeff3;
  border-radius: 50%;
  margin-left: 20px;
`;

export const FilterWrap = styled.div`
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  display: flex;
  margin: 6px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
`;

export const Filter = styled(filter)`
  width: 14px;
  height: 14px;
`;
