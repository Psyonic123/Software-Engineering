package com.example.sweteamalpha.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GreetingController {
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
}
