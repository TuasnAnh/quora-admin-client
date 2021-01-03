<%-- 
    Document   : adminmanager
    Created on : Dec 30, 2020, 1:21:15 PM
    Author     : Thao
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Quora Admin</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="https://qsf.fs.quoracdn.net/-4-images.favicon.ico-26-ebf6a9e7f7b4576d.ico">
        <link rel="stylesheet" href="adminmanager.css">
    </head>

    <body>
        <!-- Nav bar -->
        <ul>
            <li><a href="#"><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
                height="22" alt="quora-admin-logo"></a></li>
            <li><a href="adminmanager.jsp" onclick="make(event)">Home</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Admin</a>
                <div class="dropdown-content">
                    <a href="usermanager.jsp" >User Amin</a>
                    <a href="topicmanager.jsp" >Topic Admin</a>
                </div>
            </li>
            <li style="float: right;"><a href="../../login.jsp"> Log out</a></li>
        </ul>
        <!-- Nav bar -->

        <!-- Content -->
        <div class="container">
            <div class="tab-content">
                <div id="Home">
                    <h3 style="margin-left: 2%;">HOMEPAGE</h3>
                    <p style="margin-left: 2%;">Un lieu pour partager le savoir et mieux comprendre le monde.</p>
                    <img src="https://jumpseller.com/images/learn/how-to-use-quora/quora-stats.png" alt="image" width="100%" height="100%">
                </div>
            </div>
        </div>
        <!-- Content -->
    </body>

    <script type="text/javascript">
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>

<!--    <script>type = "module" src = "topic-admin-call-api.js"</script>

    <script>type = "module" src = "user-admin-call-api.js"</script>-->

<!--    <script type="text/javascript" src="admin-function.js"></script>-->
</html>
