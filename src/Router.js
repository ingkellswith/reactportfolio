import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import MainImage from "./MainImage";
import Home from "./component/Home";
import About from "./component/About";
import Stacks from "./component/Stacks";
import Nodejs from "./component/Nodejs";
import Python from "./component/Python";
import React from "./component/React";
import Unity from "./component/Unity";
import Socket from "./component/Socket";
import Native from "./component/Native";

function Router() {
  return (
    <HashRouter>
      <MainImage />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/stacks" exact component={Stacks} />
        <Route path="/stacks/nodejs" exact component={Nodejs} />
        <Route path="/stacks/react" exact component={React} />
        <Route path="/stacks/python" exact component={Python} />
        <Route path="/stacks/unity" exact component={Unity} />
        <Route path="/stacks/nodejs/socket" exact component={Socket} />
        <Route path="/stacks/react/native" exact component={Native} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}
export default Router;
