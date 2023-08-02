package com.example.mikkabouzutravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mikkabouzutravel.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	public Role findByName(String name);
}
