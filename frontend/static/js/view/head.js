const $ = document;

export default function Header(root){
    root.innerHTML = `<div id="head"></div>`;
    const head = $.querySelector("#head");

    const ajouMemo = $.createElement('div');
    ajouMemo.innerHTML = 'AJOU Memo';
    ajouMemo.id = 'ajouMemo';

    const sidebar = $.createElement('img');
    sidebar.src = 'Icon.png';
    sidebar.id = "sidebar";

    const logInButton = $.createElement('div');
    logInButton.innerHTML = 'Log In';
    logInButton.id = 'logInButton';

    const visual = $.createElement('div');
    visual.id = 'visual';

    head.appendChild(ajouMemo);
    head.appendChild(sidebar);
    head.appendChild(logInButton);
    root.appendChild(visual);
}