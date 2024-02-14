package com.agrocloud.sanjay.dto.response;

import lombok.Data;

@Data
public class UserLoanResponse {
    private String userLoanId;
    private String userId;
    private String loanId;
    private double amount;
}
