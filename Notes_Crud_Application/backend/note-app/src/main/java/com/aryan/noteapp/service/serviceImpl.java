package com.aryan.noteapp.service;

import com.aryan.noteapp.entity.Note;
import com.aryan.noteapp.repository.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class serviceImpl implements noteservice {
    @Autowired
    NoteRepo rep;
    @Override
    public Note addNote(Note note) {
        return rep.save(note);
    }

    @Override
    public ArrayList<Note> getAll() {
        return rep.getAllNotes();
    }

    @Override
    public int updateNote(String title,String description,int id) {
        return rep.update(title, description, id);
    }


}
