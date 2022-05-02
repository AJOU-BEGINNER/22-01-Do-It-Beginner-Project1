import Header from "./view/head.js";
import FreeBoard from "./view/board/freeBoard.js";

const $ = document;
const root = $.querySelector("#root");

Header(root);
FreeBoard(visual);

//locaion 변경

const handleLocationChange = (e) => {
    console.log("locationchanged");

    const { href } = e.detail;
    window.history.pushState(undefined, "타이틀", href);
    renderContents();
};

window.addEventListener("locationChange", handleLocationChange);

//location에 따라 화면 렌더링

const renderContents = () =>{
    const { pathname } = window.location;
    switch (pathname) {
        case "/":
            title.innerHTML = "1";
            break
        case "/main":
            title.innerHTML = "2";
            break
        default:
            title.innerHTML = "<div>404</div>"
    }
}

//뒤로가기 할때 location에 따라 다시 렌더링

window.addEventListener("popstate", ()=> {
    renderContents();
})

// ajou memo 클릭-> 화면전환

ajouMemo.addEventListener("click", () => {

    const targetUrl = "/main";
    const { pathname } = window.location;

    if (targetUrl === pathname) {
        return;
    }

    const locationChangedEvent = new CustomEvent("locationChange",{
        composed: true,
        detail: {href: "main"}
    });
    window.dispatchEvent(locationChangedEvent);
});