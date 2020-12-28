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
        <link href="user.css" rel="stylesheet" />
        <link href="../../admin-global-css/globalStyle.css" rel="stylesheet" />
        <title>Admin Panel</title>
    </head>
    <body>
        <%@include file="../navbar/navbar.jsp" %>
        <div class ="page-body">
            <div class="body-wrapper">
                <div align="center">
                    <table border="1" cellpadding="5">
                        <caption><h2>List of Users</h2></caption>
                        <tr>
                            <th>User ID</th>
                            <th>ABC</th>
                            <th>Actions</th>
                        </tr>
                        <c:forEach var="report" items="${reports}">
                            <tr>
                                <td><c:out value="${report.aid}" /></td>
                            <td><c:out value="${report.count}" /></td>
                            <td>
                                <a href="/view?id=<c:out value='${report.aid}' />">View Answer</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="/view?id=<c:out value='${report.aid}' />">Delete Report</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="/warn?id=<c:out value='${report.aid}' />">Delete & Warn</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="/ban?id=<c:out value='${report.aid}' />">Delete & Ban</a>  
                            </td>
                            </tr>
                        </c:forEach>
                    </table>
                </div>  
            </div>
        </div>
    </body>
    <!-----------------------  report script ----------------------->
    <script>
        setGray("user");
    </script>
    <script src="user.js" type="module"></script>

</html>
