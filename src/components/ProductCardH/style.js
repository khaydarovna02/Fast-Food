import styled from "styled-components";
import { ReactComponent as save } from "../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as clipboard } from "../../assets/icons/clipboard.svg";
import { ReactComponent as truck } from "../../assets/icons/truck.svg";

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  min-width: 964px;
  width: 100%;
  height: 150px;
  margin: 6px 0;

  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 25px 35px;
  border-right: ${({ last }) => !last && "2px solid #edeff3"};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ bottom }) => bottom && "auto"};
  border-top: ${({ border }) => border && "1px solid #edeff3"};
  width: ${({ border }) => (border ? "fit-content" : "100%")};
  padding-top: ${({ border }) => border && "20px"};
`;

Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  max-width: fit-content;
  height: 36px;
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 0.666667px;
  color: #ffffff;
  background: #20d472;
  border-radius: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  background: #edeff3;
`;

Info.Save = styled(save)`
  width: 15px;
  height: 17px;
`;

Info.Clock = styled(clock)`
  width: 18px;
  height: 18px;
`;

Info.Time = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 16px;
`;

Info.User = styled(user)`
  width: 16px;
  height: 18px;
  margin-right: 18px;
`;

Info.UserName = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
`;

Info.Phone = styled(phone)`
  width: 16px;
  height: 18px;
  margin-right: 17px;
`;

Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  font-weight: ${({ bolder }) => bolder && "bold"};
`;

Info.Clipboard = styled(clipboard)`
  width: 16px;
  height: 18px;
  margin-right: 10px;
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
  margin-right: 10px;
`;

Info.Truck = styled(truck)`
  width: 16px;
  height: 14px;
  margin-right: 10px;
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
