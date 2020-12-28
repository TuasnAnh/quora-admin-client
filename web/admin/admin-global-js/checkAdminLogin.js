/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {API_URL, contextPath} from "../../js/global-variable.js";

const firstLogin = localStorage.getItem("firstLogin");
if (firstLogin) {
    window.location = contextPath + "/admin/user-manage/homepage.jsp";
} else {
    window.location = contextPath + "/login.jsp";
}


