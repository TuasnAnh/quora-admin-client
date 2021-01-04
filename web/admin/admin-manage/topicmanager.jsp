<%-- 
    Document   : topicmanager
    Created on : Dec 30, 2020, 1:21:43 PM
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
        <link rel="stylesheet" href="topicmanager.css">
    </head>
    <body>
        <!-- Nav bar -->
        <ul>
            <li><a href="#"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
                        height="22" alt="quora-admin-logo"></a></li>
            <li><a href="adminmanager.jsp">Home</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Admin</a>
                <div class="dropdown-content">
                    <a href="usermanager.jsp" >User Amin</a>
                    <a href="topicmanager.jsp" onclick="make(event)">Topic Admin</a>
                </div>
            </li>
            <li style="float: right;"><a href="../../login.jsp"> Log out</a></li>
        </ul>
        <!-- Nav bar -->


        <!-- Table -->
        <div class="listform2">
            <table id="table" class="center">
                <thead>
                    <tr>
                        <td colspan="5" class="panel-heading">List of Topic Admins</td>
                    </tr>
                    <tr>
                        <th class="panel-body" id="id22">ID</th>
                        <th class="panel-body" id="email22">Email</th>
                        <th class="panel-body" id="password22">Password</th>
                        <th class="panel-body" id="role22" style="display: none;">Role</th>
                        <th class="panel-body" id="action22">Action</th>

                    </tr>

                </thead>
                <tbody id="name-list2">

                </tbody>
            </table>
        </div
        <!-- Table -->

        <!-- Add new form -->
        <footer>
            <button class="btn btn-lg" data-toggle="modal" data-target="#myModal" id="myBtn2" onclick="show()" >+</button>

            <div id="id02" class="modal">
                <div class="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" id="email2" placeholder="Enter Email" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="text" id="password2" name="psw" required>

                    <button type="submit" id="submit2" onclick="AddTopicAdmin()">Submit</button>
                    <button type="submit" id="genPassword2" onclick="getPassword()">Generate Password</button>
                    <button type="submit" id="cancel2" onclick="del()">Cancel</button>
                </div>
            </div>
        </footer>
    </body>

    <script type="text/javascript">
        function getPassword() {
            var chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
            var passwordLength = 8;
            var password = "";
            for (var i = 0; i < passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1);
            }
            document.getElementById("password2").value = password;
        }
    </script>

    <script type="text/javascript">
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>

    <script>
        function show() {
            document.getElementById("id02").style.display = "block";
        }
        function del() {
            document.getElementById("id02").style.display = "none";
        }
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>

    <script type="module" src="topic-admin-call-api.js"></script>
    
    <script type="text/javascript" src="admin-function.js"></script>
</html>
