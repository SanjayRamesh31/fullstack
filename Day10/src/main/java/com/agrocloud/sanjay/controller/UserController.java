package com.agrocloud.sanjay.controller;

import static com.agrocloud.sanjay.utils.MyConstant.USER;
import static com.agrocloud.sanjay.utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.UserResponse;
import com.agrocloud.sanjay.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor


public class UserController {
    private final UserService userService;
        @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> create() {
            BasicResponse<UserResponse> response=new BasicResponse<>();
            try {
                response=userService.getAllUser();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                System.out.println(e);
                response.setMessage("Something went wrong");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
}
