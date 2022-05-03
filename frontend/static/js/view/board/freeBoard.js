const $ = document;

export default function FreeBoard(root){
    root.innerHTML = '<div id="freeBoard"></div>';
    const freeboard = $.getElementById('freeBoard');

    const boardName = $.createElement('div');
    boardName.innerHTML = "자유게시판";
    boardName.className = "boardNameInvisual"

    const register = $.createElement('div');
    register.innerHTML = '등록하기';
    register.className = 'register';

    freeboard.appendChild(boardName);
    freeboard.appendChild(register);

    const listBox = $.createElement('div');
    listBox.className = 'listBox';

    for(var i=0; i<5;i++){
        const listBar = $.createElement('div');
        listBar.className = `listBar${i}`;
        listBox.appendChild(listBar);
    }
    freeboard.appendChild(listBox);

    // var freeList = [];
    // for(var i=0; i<freeList.length;i++){
        
    // }
}