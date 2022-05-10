import Component from "./common/Component.js";
import Bye from "./Component/bye.js";

const $ = (selector) => document.querySelector(selector);
const create = (selector) => document.createElement(selector);

const root = $("#root");

const app = new Component(root, null);

const temp = create("div");
temp.className = "Temp";

root.appendChild(temp);

const bye = new Bye(temp, null);
