package com.agrocloud.sanjay.service;
import java.util.List;

import com.agrocloud.sanjay.dto.request.UserRequest;
import com.agrocloud.sanjay.dto.response.UserResponse;

public interface UserService {
    UserResponse createUser(UserRequest userRequest);
    UserResponse getUserById(String userId);
    UserResponse updateUser(String userId, UserRequest userRequest);
    void deleteUser(String userId);
    List<UserResponse> getAllUsers();
}
