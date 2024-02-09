package com.agrocloud.sanjay.service;

import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
