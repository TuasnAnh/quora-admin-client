/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "./js/global-variable.js";
var name_list = document.getElementById('name-list');
var topic_name= document.getElementById('topicname');
var image_url= document.getElementById('thumbnail');

getAllTopicsAction();

// Get all
function getAllTopicsAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/admin/get-all-topicc`, true);
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
                                data += '<td>' + response[i].tid + '</td>';
                                data += '<td>' + response[i].topicName + '</td>';
                                data += '<td style="width: 10%; text-align: center;">';
                                data += '<img style="width: 100%;" src="' + response[i].topicImageUrl + '" alt="No image" />';
                                data += '</td>';
                                data += '<td style="width: 20%;">';
                                    data += '<center>';
                                        data += '<button class="editbutton" onclick="Edit(' + response[i].tid + ')">Edit</button> |';
                                        data += '<button class="deletebutton" onclick="Delete(' + response[i].tid + ')">Delete</button>';
                                    data += '</center>';

                                data += '</td>';

                            data += '</tr>';

                        }
                }

                name_list.innerHTML = data;
                resolve(response);
            }
        };

        xhr.send();
    });
}
// (END) Get all