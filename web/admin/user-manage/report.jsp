<%-- 
    Document   : report.jsp
    Created on : Nov 28, 2020, 11:23:10 AM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="report.css" rel="stylesheet" />
        <title>Admin Panel</title>
    </head>
    <body>
        <%@include file="./navbar/navbar.jsp" %>
        <div class ="page-body">
            <div class="body-wrapper">
                <div align="center" id='tableOutput'>
                </div>  
            </div>
        </div>
    </body>
    <!-----------------------  report script ----------------------->
    <script src="report.js"></script>
    <script>
        setGray("report");
        getReports();
    </script>

</html>
