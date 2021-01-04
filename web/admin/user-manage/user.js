var API_URL = 'http://localhost:38940/quora-admin-api';

async function getUsers() {
    const response = await getUsersAction();
    var myHTMLStr = '<table border="1" cellpadding="5"><caption><h2>User Management</h2></caption><tr><th>User ID</th><th>Email</th><th>Status</th><th>Actions</th></tr>';
    for (var i in response) {
        myHTMLStr+= '<tr>';
        myHTMLStr+='<td>' + response[i]['uid'] + '</td><td>' + response[i]['email'] + '</td><td>' + response[i]['loginStatus'] + '</td>';
        myHTMLStr+='<td><a href=./profile.jsp?uid=' + response[i]['uid'] + '>View User</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=' + API_URL + '/user/delete-user?uid=' + response[i]['uid'] + '>Delete User</a></td>';
        myHTMLStr+= '</tr>';
    }
    myHTMLStr += '</table>';
    document.getElementById('tableOutput').innerHTML = myHTMLStr;
};

async function getUsersAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL + '/user/get-users', true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Prevent CSRF attacks
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };
        xhr.send(null);
    });
}