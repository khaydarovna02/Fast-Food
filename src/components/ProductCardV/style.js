import styled from "styled-components";
import { ReactComponent as save } from "../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  width: 234px;
  min-width: 234px;
  margin: 6px 0;
  padding: 0 18px;

  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: ${({ align }) => align && "center"};
  flex-direction: ${({ column }) => column && "column"};
  padding: 16px 0;
  border-bottom: ${({ last }) => !last && "1px solid #edeff3"};
`;

export const Info = styled.div`
  display: flex;
  margin-left: ${({ right }) => right && "auto"};
  align-items: ${({ right }) => right && "center"};
  flex-direction: ${({ col }) => col && "column"};
  margin-top: ${({ top }) => top && "15px"};
`;

Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  max-width: fit-content;
  height: 30px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  background: #20d472;
  border-radius: 18px;
  margin-right: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background: #edeff3;
`;

Info.Save = styled(save)`
  width: 12px;
  height: 14px;
`;

Info.Clock = styled(clock)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

Info.Time = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
`;

Info.User = styled(user)`
  width: 14px;
  height: 16px;
  margin-right: 18px;
`;

Info.UserName = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  font-weight: 600;
`;

Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  font-weight: ${({ bolder }) => bolder && "600"};
`;

Info.Payme = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

Info.PaymeIcon = styled.div`
  width: 10px;
  height: 10px;
  background: #14e5e4;
  border-radius: 50%;
  margin-right: 8px;
`;

Info.Phone = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
`;

Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
`;

Info.Summ = styled.div`
  font-family: SFProDisplay bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
`;

Info.Icon = styled.div`
  display: flex;
  margin-left: auto;
`;
