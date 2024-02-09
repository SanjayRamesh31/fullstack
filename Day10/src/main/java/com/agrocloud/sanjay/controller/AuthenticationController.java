package com.agrocloud.sanjay.controller;


import static com.agrocloud.sanjay.utils.MyConstant.AUTH;
import static com.agrocloud.sanjay.utils.MyConstant.LOGIN;
import static com.agrocloud.sanjay.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.sanjay.dto.request.LoginRequest;
import com.agrocloud.sanjay.dto.request.RegisterRequest;
import com.agrocloud.sanjay.dto.response.LoginResponse;
import com.agrocloud.sanjay.dto.response.RegisterResponse;
import com.agrocloud.sanjay.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try {
            response=authenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try {
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        } catch (Exception e) {
            // LoginResponse.builder()
            // .message("Something went wrong!").token("").build();
            System.out.println(e);
            response.setMessage("Something went wrong!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}