<%-- 
    Document   : usermanager
    Created on : Dec 30, 2020, 1:21:33 PM
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
        <link rel="stylesheet" href="usermanager.css">
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
                    <a href="usermanager.jsp" onclick="make(event)">User Amin</a>
                    <a href="topicmanager.jsp" >Topic Admin</a>
                </div>
            </li>
            <li style="float: right;"><a href="../../login.jsp"> Log out</a></li>
        </ul>
        <!-- Nav bar -->

        <!-- Table -->
        <div class="listform1">
            <table id="table" class="center">
                <thead>
                    <tr>
                        <td colspan="5" class="panel-heading">List of User Admins</td>
                    </tr>
                    <tr>
                        <th class="panel-body" id="id11">ID</th>
                        <th class="panel-body" id="email11">Email</th>
                        <th class="panel-body" id="password11">Password</th>
                        <th class="panel-body" id="role11" style="display: none;">Role</th>
                        <th class="panel-body" id="action11">Action</th>
                    </tr>
                </thead>
                <tbody id="name-list1">

                </tbody>
            </table>
        </div>
        <!-- Table -->

        <!-- Add new Form -->
        <footer>
            <button class="btn btn-lg" data-toggle="modal" data-target="#myModal" id="myBtn1" onclick="show()" >+</button>

            <div id="id01" class="modal">
                <div class="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" id="email1" placeholder="Enter Email" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="text" id="password1" name="psw" required>

                    <button type="submit" id="submit1" onclick="AddUserAdmin()">Submit</button>
                    <button type="submit" id="genPassword1" onclick="getPassword()">Generate Password</button>
                    <button type="submit" id="cancel1" onclick="del()">Cancel</button>
                </div>
            </div>
        </footer>
        <!-- Add new Form -->
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
            document.getElementById("password1").value = password;
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
            document.getElementById("id01").style.display = "block";
        }
        function del() {
            document.getElementById("id01").style.display = "none";
        }
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>


    <!--    <script>type = "module" src = "topic-admin-call-api.js"</script>-->

    <script type = "module" src = "user-admin-call-api.js"></script>

    <script type="text/javascript" src="admin-function.js"></script>
</html>
