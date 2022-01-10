import Generic from "../page/Generic";
import { ReactComponent as buyurtmalar } from "../assets/icons/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assets/icons/maxsulotlar.svg";
import { ReactComponent as kategoriyalar } from "../assets/icons/kategoriyalar.svg";
import { ReactComponent as filiallar } from "../assets/icons/filiallar.svg";
import { ReactComponent as mijozlar } from "../assets/icons/mijozlar.svg";
import { ReactComponent as xisobot } from "../assets/icons/xisobot.svg";
import { ReactComponent as hodimlar } from "../assets/icons/settings.svg";
import { ReactComponent as katalog } from "../assets/icons/settings.svg";

export const sidebar = [
  {
    id: 1,
    path: "buyurtmalar",
    title: "Buyurtmalar",
    Component: Generic,
    Icon: buyurtmalar,
    hidden: false,
  },
  {
    id: 2,
    path: "maxsulotlar",
    title: "Maxsulotlar",
    Component: Generic,
    Icon: maxsulotlar,
    hidden: false,
  },
  {
    id: 3,
    path: "kategoriyalar",
    title: "Kategoriyalar",
    Component: Generic,
    Icon: kategoriyalar,
    hidden: false,
  },
  {
    id: 4,
    path: "filiallar",
    title: "Filiallar",
    Component: Generic,
    Icon: filiallar,
    hidden: false,
  },
  {
    id: 5,
    path: "mijozlar",
    title: "Mijozlar",
    Component: Generic,
    Icon: mijozlar,
    hidden: false,
  },
  {
    id: 6,
    path: "xisobot",
    title: "Xisobot",
    Component: Generic,
    Icon: xisobot,
    hidden: false,
  },
  {
    id: 7,
    path: "hodimlar",
    title: "Hodimlar",
    Component: Generic,
    Icon: hodimlar,
    hidden: false,
  },
  {
    id: 8,
    path: "katalog",
    title: "Katalog",
    Component: Generic,
    Icon: katalog,
    hidden: false,
  },
];
