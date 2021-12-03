package com.example.sweteamalpha.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.*;
import com.example.sweteamalpha.demo.model.player;
import com.example.sweteamalpha.demo.repository.PlayerRepository;

//@CrossOrigin(origins = "https://sweteamalpha.herokuapp.com/")
@CrossOrigin(origins = "http://localhost:8080")

@RestController
@RequestMapping("/api")

public class restController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/startServer")
    public JSONObject startServer(@RequestParam(required = false) String first_name) {
        try {
            udpBaseServer_2 server = new udpBaseServer_2();
            JSONObject data = server.startServer();
            return data;
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/stopServer")
    public ResponseEntity<List<player>> stopServer(@RequestParam(required = false) String first_name) {
        try {
            List<player> players = new ArrayList<player>();
            udpBaseClient_2.main(null);
            return new ResponseEntity<>(players, HttpStatus.OK);

        }

        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAllPlayers")
    public ResponseEntity<List<player>> getAllTutorials(@RequestParam(required = false) String first_name) {
        try {
            List<player> players = new ArrayList<player>();

            if (first_name == null) {
                playerRepository.findAll().forEach(players::add);
            }

            if (players.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(players, HttpStatus.OK);
        }

        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getPlayer/{id}")
    public ResponseEntity<player> getPlayerById(@PathVariable("id") int id) {
        Optional<player> playerData = playerRepository.findById(id);

        if (playerData.isPresent()) {
            return new ResponseEntity<>(playerData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addPlayer/{id}/{codename}")
    public ResponseEntity<player> createPlayer(@PathVariable("id") int id,
            @PathVariable("codename") String codeName) {

        try {
            player _player = playerRepository.save(new player(id, null, null, codeName));
            return new ResponseEntity<>(_player, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @PutMapping("/updatePlayer/{id}")
    // public ResponseEntity<player> updatePlayer(@PathVariable("id") int id,
    // @RequestBody player Player) {
    // Optional<player> playerData = playerRepository.findById(id);
    //
    // if (playerData.isPresent()) {
    // player _player = playerData.get();
    // _player.setFirstName(Player.getFirstName());
    // _player.setLastName(Player.getLastName());
    // _player.setCodeName(Player.getCodeName());
    // return new ResponseEntity<>(playerRepository.save(_player), HttpStatus.OK);
    // }
    // else {
    // return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    // }
    // }

    // @DeleteMapping("/deletePlayer/{id}")
    // public ResponseEntity<HttpStatus> deletePlayer(@PathVariable("id") int id){
    // try {
    // playerRepository.deleteById(id);
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
    // catch (Exception e) {
    // return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // }
    // }

    // @DeleteMapping("/deleteAllPlayers")
    // public ResponseEntity<HttpStatus> deleteAllPlayers() {
    // try {
    // playerRepository.deleteAll();
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
    // catch (Exception e) {
    // return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // }
    // }

}
