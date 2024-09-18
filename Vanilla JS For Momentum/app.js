const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// loginForm에서 html의 #iogin-form을 찾고 input을 차례대로 찾아냄
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// String만 포함된 변수는 대문자 표기, string 저장하고 싶을 때 사용

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username",  username)
}

loginForm.addEventListener("submit", onLoginSubmit);



