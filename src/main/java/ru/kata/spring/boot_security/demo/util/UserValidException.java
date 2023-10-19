package ru.kata.spring.boot_security.demo.util;

public class UserValidException extends RuntimeException{
    public UserValidException(String msg) {
        super(msg);
    }
}
