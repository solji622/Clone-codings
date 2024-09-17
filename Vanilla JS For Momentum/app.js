const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// loginForm에서 html의 #iogin-form을 찾고 input, btn을 차례대로 찾아냄

function onLoginDtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginDtnClick);