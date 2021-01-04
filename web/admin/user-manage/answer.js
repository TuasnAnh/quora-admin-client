var API_URL = 'http://localhost:38940/quora-admin-api';

async function viewAnswer() {
    const answer = await viewAnswerAction();
    const question = await viewQuestionAction(answer['questionId']);
    var myHTMLStr = '<table border="1" cellpadding="5"><caption><h2>Question Info</h2></caption><tr><th>Question ID</th><th>User ID</th><th>Content</th><th>Time</th></tr>';
    myHTMLStr += '<tr>';
    myHTMLStr += '<td>' + question['questionId'] + '</td><td>' + question['userId'] + '</td><td>' + question['content'] + '</td><td>' + question['time'] + '</td>';
    myHTMLStr += '</tr>';
    myHTMLStr += '</table>';
    myHTMLStr += '<table border="1" cellpadding="5"><caption><h2 style="margin-top: 50px">Answer Info</h2></caption><tr><th>Answer ID</th><th>User ID</th><th>Content</th><th>Time</th><th>Upvote</th><th>Downvote</th></tr>';
    myHTMLStr += '<tr>';
    myHTMLStr += '<td>' + answer['answerId'] + '</td><td>' + answer['userId'] + '</td><td>' + answer['content'] + '</td><td>' + answer['time'] + '</td><td>' + answer['upvote'] + '</td><td>' + answer['downvote'] + '</td>';
    myHTMLStr += '</tr>';
    myHTMLStr += '</table>';
    myHTMLStr += '<input class="deletebutton" type="button" onclick="location.href=\'' + API_URL + '/user/delete-answer?aid=' + answer['answerId'] + '\';" value="Delete Answer"/>';
    document.getElementById('tableOutput').innerHTML = myHTMLStr;
    
    setHideAction();
}

function hideDotes(customId) {
    const dots = document.getElementById(`dots-${customId}`);
    const moreText = document.getElementById(`more-${customId}`);

    dots.style.display = "none";
    moreText.style.display = "block";
}


function setHideAction() {
    const hides = document.querySelectorAll("[id^='dots-']");
    for (let i = 0; i < hides.length; i++) {
        const id = hides[i].getAttribute("id");
        const customId = id.split("-")[1];
        hides[i].addEventListener("click", function () {
            hideDotes(customId);
        });
    }
}

async function viewAnswerAction() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL + '/user/get-answer' + location.search, true);
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

async function viewQuestionAction(qid) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL + '/user/get-question?qid=' + qid, true);
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