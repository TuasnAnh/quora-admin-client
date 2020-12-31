var API_URL = 'http://localhost:8080/quora-api';

async function getReports() {
    const response = await getReportsAction();
    var myHTMLStr = '<table border="1" cellpadding="5"><caption><h2>Report Management</h2></caption><tr><th>Answer ID</th><th>Number of Report</th><th>Actions</th></tr>';
    for (var i in response) {
        myHTMLStr+= '<tr>';
        myHTMLStr+='<td>' + response[i]['aid'] + '</td><td>' + response[i]['number'] + '</td>';
        myHTMLStr+='<td><a href=./answer.jsp?aid=' + response[i]['aid'] + '>View Answer</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=' + API_URL + '/user/delete-report?aid=' + response[i]['aid'] + '>Delete Report</a></td>';
        myHTMLStr+= '</tr>';
    }
    myHTMLStr += '</table>';
    document.getElementById('tableOutput').innerHTML = myHTMLStr;
};	

async function getReportsAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL + '/user/get-reports', true);
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