const $ = document;

export default function SideBar(root){
    const sideBar = $.createElement('div');
    sideBar.id = 'sideBar';

    sidebar.addEventListener("click",showBar);
    sideBar.className = 'hidden';
    function showBar(){
        sideBar.classList.toggle("hidden");
    }
    const inSideBar = $.createElement('div');
    inSideBar.id = 'inSideBar';

    let boardArr = ['자유 게시판', '비밀 게시판', '정보 게시판', '홍보 게시판', 'SW 게시판'];

    for (var i=0; i<boardArr.length; i++){
        const boardButton = $.createElement(`p`);
        boardButton.innerHTML += boardArr[i];
        boardButton.id = `BoardName${i}`;
        inSideBar.appendChild(boardButton);
        const line = $.createElement('div');
        line.className = `line${i}`;
        inSideBar.appendChild(line);
    }
    sideBar.appendChild(inSideBar);
    root.appendChild(sideBar);
}