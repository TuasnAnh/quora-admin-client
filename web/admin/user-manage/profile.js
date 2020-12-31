var API_URL = 'http://localhost:8080/quora-api';

async function viewUser() {
    const user = await viewUserAction();
    var myHTMLStr = '<table border="1" cellpadding="5"><caption><h2>User Info</h2></caption><tr><th>First Name</th><th>Last Name</th><th>Description</th><th>Credential</th><th>School</th><th>Degree Type</th><th>Graduation</th><th>Location</th><th>URL</th><th>Register Date</th></tr>';
    myHTMLStr += '<tr>';
    myHTMLStr += '<td>' + user['firstName'] + '</td><td>' + user['lastName'] + '</td><td>' + user['description'] + '</td><td>' + user['credential'] + '</td><td>' + user['school'] + '</td><td>' + user['degreeType'] + '</td><td>' + user['graduationYear'] + '</td><td>' + user['location'] + '</td><td>' + user['url'] + '</td><td>' + user['registerDate'] + '</td>';
    myHTMLStr += '</tr>';
    myHTMLStr += '</table>';
    myHTMLStr += '<input type="button" onclick="location.href=\'' + API_URL + '/user/ban-user?uid=' + user['uid'] + '\';" value="Ban User"/>';
    document.getElementById('tableOutput').innerHTML = myHTMLStr;
}

async function viewUserAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL + '/user/get-user' + location.search, true);
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