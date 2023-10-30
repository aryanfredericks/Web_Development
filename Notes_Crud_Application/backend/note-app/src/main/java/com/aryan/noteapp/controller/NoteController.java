package com.aryan.noteapp.controller;


import com.aryan.noteapp.entity.Note;
import com.aryan.noteapp.entity.NoteBody;
import com.aryan.noteapp.exception.UserNotFoundException;
import com.aryan.noteapp.repository.NoteRepo;
import com.aryan.noteapp.service.noteservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

    @Autowired
    noteservice service;

    @Autowired
    NoteRepo rep;

    @PostMapping("/add-note")
    public ResponseEntity<?> addNote(
            @RequestBody NoteBody noteBody
            ){
        System.out.println(noteBody.getTitle()+noteBody.getDesc());
        String title = noteBody.getTitle();
        String description = noteBody.getDesc();
        if (title.isEmpty()||description.isEmpty()){
            return new ResponseEntity<>("invalid information", HttpStatus.BAD_REQUEST);
        }
        else{
            Note n = service.addNote(new Note(title,description));
            return new ResponseEntity<>("success",HttpStatus.OK);
        }
    }

    @GetMapping("/get-all-notes")
    public ResponseEntity<?> getAll(){
        ArrayList<Note> allNotes = service.getAll();
        if (allNotes.isEmpty()){
            return new ResponseEntity<>("not found",HttpStatus.NOT_FOUND);
        }
        else {
            return new ResponseEntity<>(allNotes,HttpStatus.OK);
        }
    }

    @PutMapping("/edit-note/{id}")
    public ResponseEntity<?> update(
            @RequestBody Note n,
            @PathVariable int id
    ){
        System.out.println(n +","+ id);
        Note newNote =  rep.findById(id).map(
                note -> {
                    note.setTitle(n.getTitle());
                    note.setDescription(n.getDescription());
                    return rep.save(n);
                }
        ).orElseThrow(()-> new UserNotFoundException(id));
        return new ResponseEntity<>("updated",HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id){
        Optional<Note> n = rep.findById(id);
        if (n.isPresent()){
            rep.deleteById(id);
            return new ResponseEntity<>("deleted",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("no note",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getById(@PathVariable int id){
        Optional<Note> n = rep.findById(id);
        if (n.isPresent()){
            return new ResponseEntity<>(n,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("not found",HttpStatus.NOT_FOUND);
        }
    }

}
