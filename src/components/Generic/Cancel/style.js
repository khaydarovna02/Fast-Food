import styled from "styled-components";
import { ReactComponent as cancel } from "../../../assets/icons/cancel.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  background: #edeff3;
  border-radius: 50%;
`;

export const CancelIcon = styled(cancel)`
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 13px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 50%;
`;
