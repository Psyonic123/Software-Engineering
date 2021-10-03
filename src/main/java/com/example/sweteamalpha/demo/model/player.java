package com.example.sweteamalpha.demo.model;

import javax.persistence.*;


    @Entity
    @Table(name = "player")

    public class player {

        @Id
        @Column(name = "id")
        private int id;

        @Column(name = "first_name")
        private String first_name;

        @Column(name = "last_name")
        private String last_name;

        @Column (name = "codename")
        private String codename;

        public player()
        {
        }

        public player(int id, String first_name, String last_name, String codename){
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.codename = codename;
        }

        //gets
        public int getId() {
            return id;
        }

        public String getFirstName() {
            return first_name;
        }

        public String getLastName() {
            return last_name;
        }

        public String getCodeName() {
            return codename;
        }

        //sets
        public void setFirstName(String first_name) {
            this.first_name = first_name;
        }

        public void setLastName(String last_name) {
            this.last_name = last_name;
        }

        public void setCodeName(String codename) {
            this.codename = codename;
        }

        @Override
        public String toString() {
            return "player [id =" + id + " , first_name =" + first_name + " , last_name=" + last_name + " , codename=" + codename + "]";
        }
    }
    
