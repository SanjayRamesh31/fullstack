package com.agrocloud.sanjay.service;

import com.agrocloud.sanjay.dto.response.LoginResponse;
import com.agrocloud.sanjay.dto.response.RegisterResponse;
import com.agrocloud.sanjay.dto.request.LoginRequest;
import com.agrocloud.sanjay.dto.request.RegisterRequest;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
