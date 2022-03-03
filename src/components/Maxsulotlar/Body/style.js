import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 7px;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  margin: 20px 0;
`;

TitleWrap.Item = styled.div`
  font-family: SFProDisplay bold;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #2d3a45;
  padding: 6px 12px;
  border-left: ${({ first }) => !first && "1px solid #E5E5E5"};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 18px;
  margin: 4px 36px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
`;
