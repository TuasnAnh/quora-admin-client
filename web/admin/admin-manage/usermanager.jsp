<%-- 
    Document   : usermanager
    Created on : Dec 30, 2020, 1:21:33 PM
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
        <link rel="icon" href="https://qsf.fs.quoracdn.net/-4-images.favicon.ico-26-ebf6a9e7f7b4576d.ico">
        <link rel="stylesheet" href="adminmamnager.css">
        <link rel="stylesheet" href="usermanager.css">
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
                    <li class="active"><a href="adminmanager.jsp" >Home</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">User Admin<span
                                class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li style="font-size: medium;"><a href="usermanager.jsp" onclick="getAllUserAdminsAction()">User Admin</a></li>
                            <li style="font-size: medium;"><a href="topicmanager.jsp" onclick="getALLTopicAdminsAction()">Topic Admin</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#Admin"><span class="glyphicon glyphicon-user"></span>Admin Manager</a></li>
                    <li><a href="../../login.jsp"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                </ul>
            </div>
        </nav>

        <!-- List of Admins -->

        <div class="listform">
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

        <!-- Add new button -->
        <footer>
            <button class="btn btn-lg" data-toggle="modal" data-target="#myModal" id="myBtn" onclick="getPassword()">+</button>

            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4><span class="glyphicon glyphicon-lock"></span>Form</h4>
                        </div>
                        <div class="modal-body">
                            <form role="form">
                                <div class="form-group">
                                    <label for="email"> Email</label>
                                    <input type="text" class="form-control" id="email1" placeholder="Enter mail">
                                </div>
                                <div class="form-group">
                                    <label for="psw"> Password</label>
                                    <input type="text" name="" class="form-control" id="password1" placeholder="Create password" readonly="">
                                </div>
                                <div id="box1">
                                <label for="role">Choose role:</label>
                                <select name="role" id="role1">
                                    <option value="User-Admin" class="option" id="user-admin1">USER_MANAGE</option>
                                    <option value="Topic-Admin" class="option" id="topic-admin1">TOPIC_MANAGE</option>                            
                                </select>
                                </div>
                                <button type="submit" class="btn btn-danger" style="float: left;" id="save-button" onclick="AddUserAdmin()">Submit</button>
                                <button class="btn btn-danger" style="float: right;" onclick="getALLUserAdminsAction()">Cancel</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
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
            document.getElementById("password").value = password;
        }
    </script>
    
    <script type="text/javascript">
        function make(e) {
            window.location.reload();
            e.preventDefault();
        }
    </script>
    
    <script>type="module" src="topic-admin-call-api.js"</script>
    
    <script>type="module" src="user-admin-call-api.js"</script>
    
    <script type="text/javascript" src="admin-function.js"></script>
</html>
