package com.agrocloud.sanjay.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.agrocloud.sanjay.dto.request.UserLoanRequest;
import com.agrocloud.sanjay.dto.response.UserLoanResponse;
import com.agrocloud.sanjay.service.UserLoanservice;

import java.util.List;

@RestController
@RequestMapping("/api/userLoans")

public class UserLoanController {

    @Autowired
    private UserLoanservice userLoanService;

    @PostMapping
    public UserLoanResponse createUserLoan(@RequestBody UserLoanRequest userLoanRequest) {
        return userLoanService.createUserLoan(userLoanRequest);
    }

    @GetMapping("/{userLoanId}")
    public UserLoanResponse getUserLoanById(@PathVariable String userLoanId) {
        return userLoanService.getUserLoanById(userLoanId);
    }

    @PutMapping("/{userLoanId}")
    public UserLoanResponse updateUserLoan(@PathVariable String userLoanId, @RequestBody UserLoanRequest userLoanRequest) {
        return userLoanService.updateUserLoan(userLoanId, userLoanRequest);
    }

    @DeleteMapping("/{userLoanId}")
    public void deleteUserLoan(@PathVariable String userLoanId) {
        userLoanService.deleteUserLoan(userLoanId);
    }

    @GetMapping
    public List<UserLoanResponse> getAllUserLoans() {
        return userLoanService.getAllUserLoans();
    }
}
