package org.vaadin.example;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.net.URL;

import com.vaadin.flow.internal.ResponseWriter;
import com.vaadin.flow.server.DevModeHandler;
import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServiceInitListener;
import com.vaadin.flow.server.VaadinServletService;

import static com.vaadin.flow.server.Constants.VAADIN_MAPPING;

public class MFInitListener implements VaadinServiceInitListener {
    @Override
    public void serviceInit(ServiceInitEvent event) {
        event.addRequestHandler((session, request, response) -> {
            String pathInfo = request.getPathInfo();
            if(pathInfo != null) {
                final String requestFilename = getRequestFilename(
                        (HttpServletRequest) request);
                if(!requestFilename.endsWith(".js")){
                    return false;
                }
                URL resource = event.getSource().getClassLoader().getResource("META-INF/VAADIN/mf/" + requestFilename);

                if (resource != null) {
                    ResponseWriter responseWriter = new ResponseWriter(event.getSource().getDeploymentConfiguration());
                    responseWriter.writeResponseContents(requestFilename, resource, (HttpServletRequest) request, (HttpServletResponse) response);
                    return true;
                }
            }
            return false;
        });
    }

    String getRequestFilename(HttpServletRequest request) {
        // http://localhost:8888/context/servlet/folder/file.js
        // ->
        // /servlet/folder/file.js
        //
        // http://localhost:8888/context/servlet/VAADIN/folder/file.js
        // ->
        // /VAADIN/folder/file.js
        if (request.getPathInfo() == null) {
            return request.getServletPath();
        } else if (request.getPathInfo().startsWith("/" + VAADIN_MAPPING)) {
            return request.getPathInfo();
        }
        return request.getServletPath() + request.getPathInfo();
    }
}
