package com.example.sweteamalpha.demo.model;

import javax.persistence.*;


    @Entity
    @Table(name = "player")

    public class player {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
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

        public player(String first_name, String last_name, String codename){
            this.first_name = first_name;
            this.last_name = last_name;
            this.codename = codename;
        }

        //gets
        public int getId() {
            return id;
        }

        public String getfirst_name() {
            return first_name;
        }

        public String getlast_name() {
            return last_name;
        }

        public String getcodename() {
            return codename;
        }

        //sets
        public void setfirst_name(String first_name) {
            this.first_name = first_name;
        }

        public void setlast_name(String last_name) {
            this.last_name = last_name;
        }

        public void setcodename(String codename) {
            this.codename = codename;
        }

        @Override
        public String toString() {
            return "player [id =" + id + " , first_name =" + first_name + " , last_name=" + last_name + " , codename=" + codename + "]";
        }
    }
    
