import Header from "./view/head.js";
import MakeContents from "./view/contents.js";
import SideBar from "./view/sideBar.js";

const $ = document;
const root = $.querySelector("#root");

Header(root);
SideBar(root);
MakeContents(visual,'free','자유');

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
            MakeContents(visual,'free','자유');
        case "/free":
            MakeContents(visual,'free','자유');
            break
        case "/secret":
            MakeContents(visual,'secret','비밀');
            break
        case "/info":
            MakeContents(visual,'info','정보');
            break
        case "/prom":
            MakeContents(visual,'prom','홍보');
            break
        case "/sw":
            MakeContents(visual,'sw','SW');
            break
        default:
            root.innerHTML = "<div>404</div>"
    }
}

//뒤로가기 할때 location에 따라 다시 렌더링

window.addEventListener("popstate", ()=> {
    renderContents();
})

//사이드바에 있는 게시판 이름 누르면 주소바뀜 and 화면전환(게시판이동), 게시판 이동될 때 사이드바 사라짐

const freeButton = $.getElementById(`BoardName0`);
const secretButton = $.getElementById(`BoardName1`);
const infoButton = $.getElementById(`BoardName2`);
const promButton = $.getElementById(`BoardName3`);
const swButton = $.getElementById(`BoardName4`);

ajouMemo.addEventListener("click",()=>{
    rendering('free');
    if(sideBar.classList = "hidden"){
        console.log("aa");
    }else{
        sideBar.classList.toggle("hidden");
    }
});
freeButton.addEventListener("click",()=>{
    rendering('free');
    sideBar.classList.toggle("hidden");
});
secretButton.addEventListener("click",()=>{
    rendering('secret');
    sideBar.classList.toggle("hidden");
});
infoButton.addEventListener("click",()=>{
    rendering('info');
    sideBar.classList.toggle("hidden");
});
promButton.addEventListener("click",()=>{
    rendering('prom');
    sideBar.classList.toggle("hidden");
});
swButton.addEventListener("click",()=>{
    rendering('sw');
    sideBar.classList.toggle("hidden");
});

function rendering(root){
    const targetUrl = `/${root}`;
    const { pathname } = window.location;
    if (targetUrl === pathname) {
            return;
        }
        const locationChangedEvent = new CustomEvent("locationChange",{
            composed: true,
            detail: {href: `${root}`}
    });
    window.dispatchEvent(locationChangedEvent);
}