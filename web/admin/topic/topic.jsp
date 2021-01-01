<%-- 
    Document   : topic
    Created on : Dec 28, 2020, 8:37:49 PM
    Author     : Dung
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="topic.css" type="text/css" />
        <title>Topic</title>
    </head>
    <body>
        <div class="header">
            <img src="image/quora-admin-logo(fix).png" alt="Logoapp" width="300" height="57"/>
            <div class="header-right">
                <a href="#" onclick="make(event)">Topic</a>
                <a href="#" onclick="Logout()">Logout</a>
            </div>
        </div>

        <h1>List of Topics</h1>

        <div class="listform">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Topic Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="name-list">

                </tbody>
            </table>
        </div>

        <div class="addform">
            <h2>ADD/EDIT TOPIC FORM</h2>
            <div class="allform">
                <div class="formcontainer" style="width: 60%;">
                    <div class="container">
                        <input id="topicid" type="hidden" name="topicid">
                        <label for="topicname"><strong>Topic name</strong></label>
                        <input id="topicname" type="text" placeholder="Enter Topic name" name="topicname">
                        <label for="image"><strong>Image URL</strong></label>

                        <input type="file" id="thumbnail_file" class="upload-thumbnail" style="display: none;">
                        <input type="text" name="thumbnail" id="thumbnail" placeholder="Or paste the image url">
                        <button type="button" class="upbutton" onclick="document.getElementById('thumbnail_file').click()" id="btn_upload_file">Upload image</button>
                        <img id="getThumbnail" src="" alt="Cannot load an image" style="width: 30%;">

                    </div>
                    <button class="addbutton" id="save-button" onclick="Add()"><strong>Add</strong></button>
                    <button class="updatebutton" id="edit-button" onclick="Update()" style="display: none;"><strong>Update</strong></button>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="topic-up-image.js"></script>
        <script type="module" src="topic-call-api.js"></script>

        <script type="text/javascript" src="topic-function.js"></script>
        <script type="text/javascript">
                        function make(e) {
                            window.location.reload();
                            e.preventDefault();
                        }
        </script>
    </body>
</html>
