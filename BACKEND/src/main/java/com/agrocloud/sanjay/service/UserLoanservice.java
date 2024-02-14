package com.agrocloud.sanjay.service;

import java.util.List;

import com.agrocloud.sanjay.dto.request.UserLoanRequest;
import com.agrocloud.sanjay.dto.response.UserLoanResponse;

public interface UserLoanservice {
    UserLoanResponse createUserLoan(UserLoanRequest userLoanRequest);
    UserLoanResponse getUserLoanById(String userLoanId);
    UserLoanResponse updateUserLoan(String userLoanId, UserLoanRequest userLoanRequest);
    void deleteUserLoan(String userLoanId);
    List<UserLoanResponse> getAllUserLoans();
}
