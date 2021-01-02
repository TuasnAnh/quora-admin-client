/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var API_URL = "http://localhost:8080/quora-api";
var name_list1 = document.getElementById('name-list1');
var email_name1 = document.getElementById('email1');
var pass1 = document.getElementById('password1');
var name_list2 = document.getElementById('name-list2');
var email_name2 = document.getElementById('email2');
var pass2 = document.getElementById('password2');
var admin_id = document.getElementById('adminid');
var addbtn = document.getElementById('myBtn');
var user_admin = document.getElementById('user-admin1');
var topic_admin = document.getElementById('topic-admin2');

var data;

function AddUserAdmin() {
    data = {
        email: email_name1.value,
        password: pass1.value,
        role: user_admin.value
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/insert-user-admin", true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
                console.log(response.noti);
                alert(response.noti);

                window.location.reload();
            }
        };

        xhr.send(JSON.stringify(data));
    });
}
;

function AddTopicAdmin() {
    data = {
        email: email_name2.value,
        password: pass2.value,
        role: topic_admin.value
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/insert-topic-admin", true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
                console.log(response.noti);
                alert(response.noti);

                window.location.reload();
            }
        };

        xhr.send(JSON.stringify(data));
    });
}
;


function DeleteAdmin(id) {
    data = {
        uid: id
//        role: user_admin.value
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/delete-admin", true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
                console.log(response.noti);
                alert(response.noti);
                window.location.reload();
            }
        };
        xhr.send(JSON.stringify(data));
    });
}
;

function Logout() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/logout", true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
                console.log(response.message);
                alert(response.message);

                window.location = contextPath + "/login.jsp";
            }
        };

        xhr.send();
    }
    );
};