const $ = document;

export default function Posting(root){
    root.innerHTML = `<div id="posting"></div>`;
    const posting = $.getElementById('posting');

    const outer = $.createElement('div');
    outer.className = 'outer';
    posting.appendChild(outer);

    const selectBoard = $.createElement('select');
    selectBoard.id = 'selectBoard';
    selectBoard.innerHTML += `<option value = ''>게시판을 선택해 주세요</option>`;
    selectBoard.innerHTML += `<option value = 'free'>자유게시판</option>`;
    selectBoard.innerHTML += `<option value = 'secret'>비밀게시판</option>`;
    selectBoard.innerHTML += `<option value = 'info'>정보게시판</option>`;
    selectBoard.innerHTML += `<option value = 'prom'>홍보게시판</option>`;
    selectBoard.innerHTML += `<option value = 'sw'>SW게시판</option>`;
    posting.appendChild(selectBoard);

    const enteringTitle = $.createElement("input");
    enteringTitle.type = 'text';
    enteringTitle.className=`enteringTitle${selectBoard.value}`;
    enteringTitle.placeholder = '제목을 입력해 주세요';
    posting.appendChild(enteringTitle);

    const content = $.createElement('input');
    content.className = `enteringContent${selectBoard.value}`;
    content.type = 'text';
    content.placeholder="내용";
    posting.appendChild(content);
}