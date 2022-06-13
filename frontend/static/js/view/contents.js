const $ = document;

export default function MakeContents(root,kind,kindInKorean){
    root.innerHTML = `<div id="${kind}Board"></div>`;
    const board = $.getElementById(`${kind}Board`);

    const boardName = $.createElement('div');
    boardName.innerHTML = `${kindInKorean}게시판`;
    boardName.className = "boardNameInvisual"

    const register = $.createElement('div');
    register.innerHTML = '등록하기';
    register.id = `register`;

    board.appendChild(boardName);
    board.appendChild(register);
    const listBox = $.createElement('div');
    listBox.className = 'listBox';

    for(var i=0; i<5; i++){
        const listBar = $.createElement('div');
        listBar.className = `listBar${i}`;
        listBox.appendChild(listBar);  
    }
    root.appendChild(listBox);

    const content = $.createElement('div');
    content.className = 'content';
    for(var i=0; i<6;i++){
        content.innerHTML += `<div id="content${i+1}">${i+1}번째 ${kindInKorean}게시판 게시물</div>`
    }
    root.appendChild(content);
}