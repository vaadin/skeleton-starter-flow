package org.vaadin.example;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = {"/embedded"})
public class EmbeddedAppServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        Object authToken = req.getSession().getAttribute("auth_token");
        boolean isAuthenticated = authToken != null;

        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html><head>");
            out.println("<meta http-equiv='Content-Type' content='text/html; "
                    + "charset=UTF-8'>");

            if (!isAuthenticated) {
                out.println("<script type='module' src='/main/web-component"
                        + "/login-form.js'></script>");
                out.println("<script type='text/javascript' "
                        + "src='/log-in.js' defer></script>");
            }
            out.println("</head><body>");
            if (isAuthenticated) {
                out.println("<h1>Welcome "
                        + UserService.getInstance().getName(authToken)
                        + "</h1>");
            } else {
                out.println("<login-form userlbl='Username' pwdlbl='Password'>"
                        + "</login-form>");
            }
            out.println("</body>");
            out.println("</html>");
        }
    }
}
