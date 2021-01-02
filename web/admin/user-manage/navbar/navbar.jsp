<%-- 
    Document   : navbar
    Created on : Nov 28, 2020, 10:50:58 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link href="./navbar/navbar.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="../admin-global-css/globalStyle.css" />

        <title>Nav bar</title>
    </head>
    <body>
        <div class="page-header">
            <!------------------page nav bar------------------->
            <div class="container">
                <div class="header-logo">
                    <img src="../../assets/logo-trimed.png" alt="" />
                </div>
                <div class="header-content">
                    <a href="./homepage.jsp" class="home header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="home-color" fill="#666" fill-rule="nonzero">
                                <path id="homesvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="home-txt" class="header-text">Home</div>
                        </div>
                    </a>
                    <a href="./report.jsp" class="notification header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="notice-color" fill="#666" fill-rule="nonzero">
                                <path id="noticesvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="notice-txt" class="header-text">Report</div>
                        </div>
                    </a>
                    <a href="./user.jsp" class="discovery header-element-wrapper">
                        <div class="element-content">
                            <div class="element-logo">
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" id="discover-color" fill="#666" fill-rule="nonzero">
                                <path id="discoversvg" d=""></path>
                                </g>
                                </svg>
                            </div>
                            <div id="discover-txt" class="header-text">Users</div>
                        </div>
                    </a>
                    <a href="#" onclick="Logout()">Logout</a>
                </div>
            </div>
        </div>


    </body>
    <script src="./navbar/logout.js"></script>
    <script src="./navbar/navbar.js"></script>
    <script>
    </script>
</html>
