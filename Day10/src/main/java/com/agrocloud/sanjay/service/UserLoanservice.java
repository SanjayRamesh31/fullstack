package com.agrocloud.sanjay.service;

import com.agrocloud.sanjay.dto.request.UserLoanRequest;
import com.agrocloud.sanjay.dto.response.UserLoanResponse;

public interface UserLoanservice {
      UserLoanResponse getUserLoanById(String userLoanId);
      UserLoanResponse deleteUserLoanById(String userLoanId);
      UserLoanResponse createUserLoanById(UserLoanRequest bookingRequest);

}
