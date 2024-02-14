package com.agrocloud.sanjay.service.impl;

import static com.agrocloud.sanjay.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agrocloud.sanjay.dto.request.LoginRequest;
import com.agrocloud.sanjay.dto.request.RegisterRequest;
import com.agrocloud.sanjay.dto.response.LoginResponse;
import com.agrocloud.sanjay.dto.response.RegisterResponse;
import com.agrocloud.sanjay.model.User;
import com.agrocloud.sanjay.repository.UserRepository;
import com.agrocloud.sanjay.service.AuthenticationService;
import com.agrocloud.sanjay.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists =userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        User user=User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
            userRepository.save(user);


            return RegisterResponse.builder()
            .message("user created successfully!")
            .build();
    }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse
        .builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }
}