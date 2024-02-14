package com.agrocloud.sanjay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agrocloud.sanjay.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {

}