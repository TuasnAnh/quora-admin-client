/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var API_URL = 'http://localhost:38940/quora-admin-api';
var contextPath = 'http://localhost:38940/quora-admin-client';
const codeInput = document.querySelector(".code-input");
const passInput = document.querySelector(".new-pass-input");
const passToShort = document.querySelector(".password-too-short");
const codeWrong = document.querySelector(".code-wrong");

document.querySelector(".change-pass-button").onclick = function () {
    if (passInput.value.length <= 8) {
        codeWrong.style.display = "none";
        passToShort.style.display = "block";
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/forgot-password`, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const message = JSON.parse(xhr.responseText);
            console.log(message);
            if (message.msg === "wrong code") {
                codeWrong.style.display = "block";
                passToShort.style.display = "none";
            } else {
                window.location = contextPath + "/login.jsp";
            }
        }
    };

    xhr.send(JSON.stringify({code: codeInput.value, newPassword: passInput.value}));
}
