package com.example.mikkabouzutravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mikkabouzutravel.entity.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository< VerificationToken, Integer> {
    public VerificationToken findByToken(String token);
}
