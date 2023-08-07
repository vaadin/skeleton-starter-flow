package org.vaadin.example.security;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.LoggerFactory;

import com.vaadin.flow.component.UI;

/**
 * Utility class wrapping Shiro security features.
 */
public class SecurityUtils {

    private static final String LOGOUT_SUCCESS_URL = "/";

    public static boolean isAuthenticated() {
        return org.apache.shiro.SecurityUtils.getSubject().isAuthenticated();
    }

    public static boolean authenticate(String username, String password) {
        try {
            org.apache.shiro.SecurityUtils.getSecurityManager().authenticate(
                    new UsernamePasswordToken(username, password));
            return true;
        } catch (AuthenticationException ex) {
            LoggerFactory.getLogger(SecurityUtils.class)
                    .debug("Cannot authenticate user", ex);
        }
        return false;
    }

    public static void logout() {
        Subject subject = org.apache.shiro.SecurityUtils.getSubject();
        if (subject.isAuthenticated()) {
            org.apache.shiro.SecurityUtils.getSecurityManager().logout(subject);
        }
        UI.getCurrent().getPage().setLocation(LOGOUT_SUCCESS_URL);
    }
}