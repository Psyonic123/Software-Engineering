package com.example.sweteamalpha.demo.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.yaml.snakeyaml.events.Event;

// Serving our static web pages
@Controller
public class routeController {
    String appName;

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("appName", appName);
        return "splash_screen";
    }

    @GetMapping("/sprint-2-frontend-player-entry.html")
    public String playerEntry(Model model) {
        model.addAttribute("appName", appName);
        return "sprint-2-frontend-player-entry";
    }

    @GetMapping("/sprint3_player_action_screen.html")
    public String actionScreen(Model model) {
        model.addAttribute("appName", appName);
        return "sprint3_player_action_screen";
    }
}
