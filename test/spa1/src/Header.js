import { WritePage } from "./Write/write.js";

export const Header = () => {
  const root = document.querySelector("#root");
  root.innerHTML = `
          <div id="header">
              <div class="Header__MenuIcon__Container">
                  <img src="../public/Asset/menu.png" />
              </div>
              <div class="Header__Title__Container" >
                  Ajou Memo
              </div>
              <div class="Header__Login__Container">
                  Login
              </div>
          </div>
      `;
};

export const addEvent = () => {
  const titleContainer = document.querySelector(".Header__Title__Container");
  titleContainer.addEventListener("click", () => {
    WritePage();
    history.pushState(null, null, "/write");
  });
};
