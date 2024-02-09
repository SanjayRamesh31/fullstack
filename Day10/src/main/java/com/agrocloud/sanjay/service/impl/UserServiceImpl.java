package com.agrocloud.sanjay.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.UserResponse;
import com.agrocloud.sanjay.model.User;
import com.agrocloud.sanjay.repository.UserRepository;
import com.agrocloud.sanjay.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    
    
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users= userRepository.findAll();
        List<UserResponse> userResponses= users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .password(user.getPassword())
        .role(user.getRole())
        .address(user.getAddress())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User Data fetched").data(userResponses).build();
    }

}