package com.agrocloud.sanjay.dto.request;

import lombok.Data;

@Data
public class UserLoanRequest {
    private String userId;
    private String loanId;
    private Long amount;
}
