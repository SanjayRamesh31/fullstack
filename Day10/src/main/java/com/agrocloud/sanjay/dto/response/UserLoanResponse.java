package com.agrocloud.sanjay.dto.response;

import com.agrocloud.sanjay.model.Loan;
import com.agrocloud.sanjay.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLoanResponse {
    private String message;
    private String userLoanId;
    private User user;
    private Loan loan;
}