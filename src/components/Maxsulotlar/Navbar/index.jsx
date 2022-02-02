import React from "react";
import {
  Container,
  Filter,
  FilterWrap,
  Plus,
  Search,
  Title,
  Wrapper,
  WrapperIcon,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper first>
        <Plus />
        <Title>Yangi maxsulot qo'shish</Title>
      </Wrapper>
      <Wrapper>
        <Search>
          <Search.Input placeholder="Qidirish" />
          <Search.Icon />
        </Search>
        <WrapperIcon>
          <FilterWrap>
            <Filter />
          </FilterWrap>
        </WrapperIcon>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
