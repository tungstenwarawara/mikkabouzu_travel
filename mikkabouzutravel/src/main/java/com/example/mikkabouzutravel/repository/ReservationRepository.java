package com.example.mikkabouzutravel.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.mikkabouzutravel.entity.Reservation;
import com.example.mikkabouzutravel.entity.User;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
	public Page<Reservation> findByUserOrderByCreatedAtDesc(User user, Pageable pageable);
	
	@Query("SELECT r FROM Reservation r WHERE r.checkoutDate >= :today")
    List<Reservation> findReservationsWithCheckoutAfterToday(@Param("today") LocalDate today);
}
