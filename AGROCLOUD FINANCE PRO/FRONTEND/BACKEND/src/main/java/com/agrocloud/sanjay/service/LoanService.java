package com.agrocloud.sanjay.service;
import java.util.List;

import com.agrocloud.sanjay.dto.request.LoanRequest;
import com.agrocloud.sanjay.dto.response.LoanResponse;

public interface LoanService {
    LoanResponse createLoan(LoanRequest loanRequest);
    List<LoanResponse> getAllLoans();
    LoanResponse getLoanById(String loanId);
    LoanResponse updateLoan(String loanId, LoanRequest loanRequest);
    void deleteLoan(String loanId);
}
