/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "./js/global-variable.js";
var name_list = document.getElementById('name-list2');
var email_name = document.getElementById('email2');
var pass = document.getElementById('password2');
var topic_admin = document.getElementById('topic-admin2');

getAllTopicAdminsAction();

// Get all
function getAllTopicAdminsAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/admin/get-all-topic-admins`, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                var data = '';
                if (response.length > 0) {
                    for (let i = 0; i < response.length; i++) {
                        data += '<tr>';
                        data += '<td class="panel-body">' + response[i].uid + '</td>';
                        data += '<td class="panel-body">' + response[i].email + '</td>';
                        data += '<td class="panel-body">' + response[i].password + '</td>';
                        data += '<td class="panel-body" style="display:none">' + response[i].role + '</td>';
                        data += '<td class="panel-footer">';
                        data += '<center>';
                        data += '<button class="btn btn-lg" id="del-btn" onclick="DeleteAdmin(' + response[i].uid + ')">Delete</button>';
                        data += '</center>';

                        data += '</td>';

                        data += '</tr>';

                    }
                }

                name_list.innerHTML = data;
                resolve(response);
            }
        };

        xhr.send(data);
    });
}
// (END) Get all


