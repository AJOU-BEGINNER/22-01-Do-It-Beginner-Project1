const $ = document;

export default function LogInPage(root){
    root.innerHTML = `<div id="logIn"></div>`;
    const logIn = $.getElementById('logIn');

    const enteringID = $.createElement('input');
    enteringID.className = 'enteringID';
    enteringID.type = "text";
    enteringID.placeholder = "ID를 입력하시오.";
    logIn.appendChild(enteringID);

    const signUp = $.createElement('div');
    signUp.id = 'signUp';
    signUp.innerHTML="회원가입";
    logIn.appendChild(signUp);

    const loginButtonInLoginPage = $.createElement('div');
    loginButtonInLoginPage.id = 'loginPagein';
    loginButtonInLoginPage.innerHTML = '로그인';
    logIn.appendChild(loginButtonInLoginPage);
}