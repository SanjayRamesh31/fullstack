package com.agrocloud.sanjay.controller;
import static com.agrocloud.sanjay.utils.MyConstant.USERLOAN;
import static com.agrocloud.sanjay.utils.MyConstant.USERLOANLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.sanjay.dto.request.UserLoanRequest;
import com.agrocloud.sanjay.dto.response.UserLoanResponse;
import com.agrocloud.sanjay.service.UserLoanservice;
// import com.agrocloud.sanjay.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USERLOAN)
@RequiredArgsConstructor
public class UserLoanController {

    private final UserLoanservice userLoanService;
    
    @GetMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> getUserLoanById(@PathVariable String userLoanId) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            response = userLoanService.getUserLoanById(userLoanId);
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @DeleteMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> deleteBooking(@PathVariable String userLoanId) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            UserLoanResponse deletedBookingResponse = userLoanService.deleteUserLoanById(userLoanId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> createBooking(@RequestBody UserLoanRequest userLoanRequest) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            UserLoanResponse createdBookingResponse = userLoanService.createUserLoanById(userLoanRequest);
            response.setMessage(createdBookingResponse.getMessage());
            // response.setData(createdBookingResponse.getData());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}