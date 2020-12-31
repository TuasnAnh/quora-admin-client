package org.apache.jsp.admin.topic;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class topic_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <link rel=\"stylesheet\" href=\"topic.css\" type=\"text/css\" />\n");
      out.write("        <title>Topic</title>\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("        <div class=\"header\">\n");
      out.write("            <img src=\"image/quora-admin-logo(fix).png\" alt=\"Logoapp\" width=\"300\" height=\"57\"/>\n");
      out.write("            <div class=\"header-right\">\n");
      out.write("                <a href=\"#\" onclick=\"make(event)\">Topic</a>\n");
      out.write("                <a href=\"#\">Logout</a>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <h1>List of Topics</h1>\n");
      out.write("\n");
      out.write("        <div class=\"listform\">\n");
      out.write("            <table>\n");
      out.write("                <thead>\n");
      out.write("                    <tr>\n");
      out.write("                        <th>ID</th>\n");
      out.write("                        <th>Topic Name</th>\n");
      out.write("                        <th>Image</th>\n");
      out.write("                        <th>Actions</th>\n");
      out.write("                    </tr>\n");
      out.write("                </thead>\n");
      out.write("                <tbody id=\"name-list\">\n");
      out.write("\n");
      out.write("                </tbody>\n");
      out.write("            </table>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <div class=\"addform\">\n");
      out.write("            <h2>ADD/EDIT TOPIC FORM</h2>\n");
      out.write("            <div class=\"allform\">\n");
      out.write("                <div class=\"formcontainer\" style=\"width: 60%;\">\n");
      out.write("                    <div class=\"container\">\n");
      out.write("                        <input id=\"topicid\" type=\"hidden\" name=\"topicid\">\n");
      out.write("                        <label for=\"topicname\"><strong>Topic name</strong></label>\n");
      out.write("                        <input id=\"topicname\" type=\"text\" placeholder=\"Enter Topic name\" name=\"topicname\">\n");
      out.write("                        <label for=\"image\"><strong>Image URL</strong></label>\n");
      out.write("\n");
      out.write("                        <input type=\"file\" id=\"thumbnail_file\" class=\"upload-thumbnail\" style=\"display: none;\">\n");
      out.write("                        <input type=\"text\" name=\"thumbnail\" id=\"thumbnail\" placeholder=\"Or paste the image url\">\n");
      out.write("                        <button type=\"button\" class=\"upbutton\" onclick=\"document.getElementById('thumbnail_file').click()\" id=\"btn_upload_file\">Upload image</button>\n");
      out.write("                        <img id=\"getThumbnail\" src=\"\" alt=\"Cannot load an image\" style=\"width: 30%;\">\n");
      out.write("\n");
      out.write("                    </div>\n");
      out.write("                    <button class=\"addbutton\" id=\"save-button\" onclick=\"Add()\"><strong>Add</strong></button>\n");
      out.write("                    <button class=\"updatebutton\" id=\"edit-button\" onclick=\"Update()\" style=\"display: none;\"><strong>Update</strong></button>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <script type=\"text/javascript\" src=\"topic-up-image.js\"></script>\n");
      out.write("        <script type=\"module\" src=\"topic-call-api.js\"></script>\n");
      out.write("\n");
      out.write("        <script type=\"text/javascript\" src=\"topic-function.js\"></script>\n");
      out.write("        <script type=\"text/javascript\">\n");
      out.write("                        function make(e) {\n");
      out.write("                            window.location.reload();\n");
      out.write("                            e.preventDefault(); \n");
      out.write("                        }\n");
      out.write("        </script>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
