package com.aryan.noteapp.entity;

public class NoteBody {
    private String title;
    private String desc;

    @Override
    public String toString() {
        return "NoteBody{" +
                "title='" + title + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public NoteBody(String title, String desc) {
        this.title = title;
        this.desc = desc;
    }

    public NoteBody(String title) {
        this.title = title;
    }
}
