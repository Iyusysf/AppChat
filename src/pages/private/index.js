import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "./chat";
import Pengaturan from "./pengaturan";
export default function Private() {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/pengaturan" component={Pengaturan} />
    </Switch>
  );
}
