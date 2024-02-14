package com.agrocloud.sanjay.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.sanjay.utils.MyConstant;
import com.agrocloud.sanjay.dto.request.PaymentRequest;
import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.PaymentResponse;
import com.agrocloud.sanjay.service.PaymentService;

import static com.agrocloud.sanjay.utils.MyConstant.PAYMENT;
import static com.agrocloud.sanjay.utils.MyConstant.PAYMENTLIST;
import static com.agrocloud.sanjay.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PaymentController {
private final PaymentService payService;

    @GetMapping(PAYMENTLIST)
    public ResponseEntity<BasicResponse<PaymentResponse>> getUser(){
        BasicResponse<PaymentResponse> response=new BasicResponse<>();
        try{
            response=payService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }


    // @SuppressWarnings("null")
    @PostMapping(PAYMENT)
    public ResponseEntity<PaymentResponse> register(@RequestBody PaymentRequest request) {
        PaymentResponse response=new PaymentResponse();

        try{
            response=payService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something Went Wrong!!!!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
        
    }
    @DeleteMapping(MyConstant.PAYMENT + "/{paymentId}")
    public ResponseEntity<BasicResponse<PaymentResponse>> deleteBooking(@PathVariable String paymentId) {
        BasicResponse<PaymentResponse> response = new BasicResponse<>();
        try {
            BasicResponse<PaymentResponse> deletedBookingResponse = payService.deletebooking(paymentId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

    
}