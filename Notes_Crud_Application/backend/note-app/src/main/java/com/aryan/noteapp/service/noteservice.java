package com.aryan.noteapp.service;

import com.aryan.noteapp.entity.Note;

import java.util.ArrayList;

public interface noteservice {
    Note addNote(Note note);
    ArrayList<Note> getAll();
    int updateNote(String title,String description,int id);
}
