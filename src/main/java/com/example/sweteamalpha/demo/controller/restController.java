package com.example.sweteamalpha.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class restController {

    @RequestMapping(path = "/getPlayer", method = RequestMethod.GET)
    public String getPlayer() {
        String playerName = "Nathan";
        String codeName = "Yeet";
        //connect to DB, return player object.
        return playerName;
    }

    @RequestMapping(path = "/testDB", method = RequestMethod.POST)
    public String postPlayer() {
        String playerName = "Nathan";
        String codeName = "Yeet";
        //make a player object, send to DB.
        return playerName;
    }

}
