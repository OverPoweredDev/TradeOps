package com.group22.back_end.services;

import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static java.nio.charset.StandardCharsets.UTF_8;

@Service
public class LoginService {
    Map<String, String> mockPasswordList = new HashMap<>();

    LoginService() {
        mockPasswordList.put("admin", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");
    }

    public boolean checkLoginDetails(String username, String password) {
        if(!mockPasswordList.containsKey(username)) {
            System.out.println("here");
            return false;
        }

        String encryptedPassword = bytesToHex(digest(password.getBytes(UTF_8), "SHA-256"));
        return Objects.equals(mockPasswordList.get(username), encryptedPassword);
    }

    public static byte[] digest(byte[] input, String algorithm) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance(algorithm);
        } catch (
                NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        }
        byte[] result = md.digest(input);
        return result;
    }

    public static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}
