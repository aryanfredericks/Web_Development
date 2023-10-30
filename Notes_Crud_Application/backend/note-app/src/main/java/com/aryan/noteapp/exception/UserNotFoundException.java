package com.aryan.noteapp.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(int id){
        super("could not find user with id = "+id);
    }

}
