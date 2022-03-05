import styled from "styled-components";
import { ReactComponent as del } from "../../../assets/icons/delete.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  background: #edeff3;
  border-radius: 50%;
`;

export const DeleteWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin: 5px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 50%;
  cursor: pointer;
`;

export const DeleteIcon = styled(del)`
  width: 13px;
  height: 14px;
`;
