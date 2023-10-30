package com.aryan.noteapp.repository;

import com.aryan.noteapp.entity.Note;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface NoteRepo extends JpaRepository<Note,Integer> {
    @Query("SELECT n FROM Note n")
    public ArrayList<Note> getAllNotes();

    @Transactional
    @Modifying
    @Query("update Note n set n.title=:title ,n.description=:description where n.id=:id")
    public int update(
            @Param("title") String title,
            @Param("description") String description,
            @Param("id") int id
    );

}
