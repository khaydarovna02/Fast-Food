import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 7px;
`;

export const Header = styled.div`
  display: flex;
`;

Header.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
`;

Header.Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  min-width: 30px;
  max-width: fit-content;
  height: 20px;
  background: #ffffff;
  border-radius: 4px;
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  margin-left: 12px;
`;

export const Total = styled.div`
  width: 234px;
  min-width: 234px;
  display: flex;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
`;

Total.Icon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ green }) => green && "#20d472"};

  background: ${({ blue }) => blue && "#11acfd"};

  background: ${({ yellow }) => yellow && "#fcb600"};

  background: ${({ purple }) => purple && "#8e007e"};
`;

Total.Summ = styled.div`
  font-family: SFProDisplay bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #2d3a45;
  margin-left: auto;
`;
