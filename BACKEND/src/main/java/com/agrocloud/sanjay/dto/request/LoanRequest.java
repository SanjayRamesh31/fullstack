package com.agrocloud.sanjay.dto.request;

import lombok.Data;

@Data
public class LoanRequest {
    private String loanName;
    private String loanType;
    private String loanScheme;
    private Integer loanDuration;
}
