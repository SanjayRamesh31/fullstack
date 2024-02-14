package com.agrocloud.sanjay.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agrocloud.sanjay.dto.request.LoanRequest;
import com.agrocloud.sanjay.dto.response.LoanResponse;
import com.agrocloud.sanjay.model.Loan;
import com.agrocloud.sanjay.repository.LoanRepository;
import com.agrocloud.sanjay.service.LoanService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoanServiceimpl implements LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Override
    public LoanResponse createLoan(LoanRequest loanRequest) {
        Loan loan = new Loan();
        loan.setLoanName(loanRequest.getLoanName());
        loan.setLoanType(loanRequest.getLoanType());
        loan.setLoanScheme(loanRequest.getLoanScheme());
        loan.setLoanDuration(loanRequest.getLoanDuration());
        loanRepository.save(loan);

        return toLoanResponse(loan);
    }

    @Override
    public List<LoanResponse> getAllLoans() {
        List<Loan> loans = loanRepository.findAll();
        return loans.stream()
                .map(this::toLoanResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LoanResponse getLoanById(String loanId) {
        Loan loan = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));
        return toLoanResponse(loan);
    }

    @Override
    public LoanResponse updateLoan(String loanId, LoanRequest loanRequest) {
        Loan loan = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));
        loan.setLoanName(loanRequest.getLoanName());
        loan.setLoanType(loanRequest.getLoanType());
        loan.setLoanScheme(loanRequest.getLoanScheme());
        loan.setLoanDuration(loanRequest.getLoanDuration());
        loanRepository.save(loan);

        return toLoanResponse(loan);
    }

    @Override
    public void deleteLoan(String loanId) {
        loanRepository.deleteById(loanId);
    }

    private LoanResponse toLoanResponse(Loan loan) {
        LoanResponse response = new LoanResponse();
        response.setLoanId(loan.getLoanId());
        response.setLoanName(loan.getLoanName());
        response.setLoanType(loan.getLoanType());
        response.setLoanScheme(loan.getLoanScheme());
        response.setLoanDuration(loan.getLoanDuration());
        return response;
    }
}
