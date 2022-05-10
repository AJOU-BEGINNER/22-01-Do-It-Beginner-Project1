import { MainPage } from "./Main/main.js";
import { Header, addEvent } from "./Header.js";

const init = () => {
  Header();
  MainPage();
  addEvent();
};

init();
