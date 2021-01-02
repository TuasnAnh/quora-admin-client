<%-- 
    Document   : adminmanager
    Created on : Dec 30, 2020, 1:21:15 PM
    Author     : Thao
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Quora Admin</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="icon" href="https://qsf.fs.quoracdn.net/-4-images.favicon.ico-26-ebf6a9e7f7b4576d.ico"><!--Them icon Quora-->
        <link rel="stylesheet" href="adminmanager.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" height="28" alt="quora-admin-logo"></a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="adminmanager.jsp" onclick="make(event)">Home</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Admin<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li style="font-size: medium;"><a href="usermanager.jsp" onclick="getAllUserAdminsAction()">User Admin</a></li>
                            <li style="font-size: medium;"><a href="topicmanager.jsp" onclick="getAllTopicAdminsAction()">Topic Admin</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#Admin"><span class="glyphicon glyphicon-user"></span>Admin Manager</a></li>
                    <li><a href="../../login.jsp"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="tab-content">
                <div id="Home" class="tab-pane fade in active">
                    <h3>HOMEPAGE</h3>
                    <p>Un lieu pour partager le savoir et mieux comprendre le monde.</p>
                    <img src="../../assets/bg.png" alt="image" width="100%" height="100%">
                </div>
            </div>

        </div>

    </body>

    <script type="text/javascript">
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>

    <script type="module" src="topic-admin-call-api.js"></script>

    <script type="module" src="user-admin-call-api.js"></script>

    <script type="text/javascript" src="admin-function.js"></script>
</html>
