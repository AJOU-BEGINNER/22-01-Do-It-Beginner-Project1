import Hi from "./Component/hi.js";

const $ = (s) => document.querySelector(s);

const root = $("#root");

const hi = Hi(root);
hi();
