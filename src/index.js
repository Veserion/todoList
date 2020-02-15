import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { autorun } from "mobx";
import { Provider as MobxProvider } from 'mobx-react';
import {RootStore} from './stores'
import {loadState, saveState} from "./utils/localstorage";
const initState = loadState();
const mobXStore = new RootStore(initState);

autorun(() => {
  console.dir(mobXStore);
  const state = mobXStore.serialize();
  saveState(state);
}, {delay: 1000});

ReactDOM.render(
  <MobxProvider {...mobXStore}>
    <App />
  </MobxProvider>,
  document.getElementById("root")
);
