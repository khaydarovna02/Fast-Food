import React from "react";
import { Container } from "./style";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";

export const Root = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
        {/* <Routes> */}
        {/* {sidebar.map(({ id, path }) => ( */}
        {/* // <Route exact key={id} path={path} component={Sidebar} /> */}
        {/* // ))} */}
        {/* </Routes> */}
        <Switch>
          {sidebar.map(({ Component, id, path }) => (
            <Route exact key={id} path={path} component={Component} />
          ))}
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </Container>
  );
};

export default Root;
