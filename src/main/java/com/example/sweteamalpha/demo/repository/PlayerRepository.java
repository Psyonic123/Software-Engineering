package com.example.sweteamalpha.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sweteamalpha.demo.model.player;


public interface PlayerRepository extends JpaRepository<player, Integer> {
    List<player> findBycodename(String codename);
}
    
