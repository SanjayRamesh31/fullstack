package com.agrocloud.sanjay.service;

import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.LoanResponse;

public interface LoanService {
    
    BasicResponse<LoanResponse> getAllLoan();
}