import React from "react";
import { Buyurtmalar } from "./buyurtmalar";

// const MainContext = createContext()

export const MainContext = ({ children }) => {
  return (
    <div>
      <Buyurtmalar>{children}</Buyurtmalar>
    </div>
  );
};
