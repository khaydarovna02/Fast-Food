import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 7px 0;
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
  padding: 6px;
  border-left: ${({ first }) => !first && "1px solid #E5E5E5"};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin: 4px 36px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 6px;
`;

export const Image = styled.div`
  margin-right: 28px;
`;

export const Text = styled.div`
  margin: ${({ title }) => !title && "0 6px"};
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
`;
