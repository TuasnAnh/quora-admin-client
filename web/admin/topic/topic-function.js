var API_URL = "http://localhost:8080/quora-api";
var name_list = document.getElementById('name-list');
var topic_name = document.getElementById('topicname');
var image_url = document.getElementById('thumbnail');
var image = document.getElementById('getThumbnail');
var topic_id = document.getElementById('topicid');
var addbtn = document.getElementById('save-button');
var editbtn = document.getElementById('edit-button');

var data;

function Add() {
    data = {
        topicName: topic_name.value,
        topicImageUrl: image_url.value
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/insert-topic", true);
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

function Edit(id) {
    data = {
        tid: id
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/get-selected-topic", true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
                topic_id.value = response.tid;
                topic_name.value = response.topicName;
                image_url.value = response.topicImageUrl;
                image.setAttribute("src", response.topicImageUrl);
                image.style.display = "block";
                addbtn.style.display = "none";

                editbtn.style.display = "block";
            }
        };
        xhr.send(JSON.stringify(data));
    });
}
;
function Update() {
    data = {
        tid: topic_id.value,
        topicName: topic_name.value,
        topicImageUrl: image_url.value
    };
    console.log(data.tid);
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/edit-topic", true);
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

function Delete(id) {
    data = {
        tid: id
    };
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "/admin/delete-topic", true);
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


