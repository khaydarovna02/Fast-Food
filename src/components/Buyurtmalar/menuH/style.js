import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 6px 0;
`;
