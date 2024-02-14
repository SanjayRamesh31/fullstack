package com.agrocloud.sanjay.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agrocloud.sanjay.dto.request.UserLoanRequest;
import com.agrocloud.sanjay.dto.response.UserLoanResponse;
import com.agrocloud.sanjay.model.Loan;
import com.agrocloud.sanjay.model.User;
import com.agrocloud.sanjay.model.UserLoan;
import com.agrocloud.sanjay.repository.LoanRepository;
import com.agrocloud.sanjay.repository.UserLoanRepository;
import com.agrocloud.sanjay.repository.UserRepository;
import com.agrocloud.sanjay.service.UserLoanservice;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserLoanServiceImpl implements UserLoanservice {

    @Autowired
    private UserLoanRepository userLoanRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoanRepository loanRepository;

    @Override
    public UserLoanResponse createUserLoan(UserLoanRequest userLoanRequest) {
       Optional<User> userOptioanl = userRepository.findById(userLoanRequest.getUserId());
       Optional<Loan> loanOptional = loanRepository.findById(userLoanRequest.getLoanId());
        var userLoan = UserLoan.builder().user(userOptioanl.get()).loan(loanOptional.get()).loanAmount(userLoanRequest.getAmount()).build();

        userLoanRepository.save(userLoan);

        return toUserLoanResponse(userLoan);
    }

    @Override
    public UserLoanResponse getUserLoanById(String userLoanId) {
        UserLoan userLoan = userLoanRepository.findById(userLoanId).orElseThrow(() -> new RuntimeException("UserLoan not found"));
        return toUserLoanResponse(userLoan);
    }

    @Override
    public UserLoanResponse updateUserLoan(String userLoanId, UserLoanRequest userLoanRequest) {
        Optional<User> userOptioanl = userRepository.findById(userLoanRequest.getUserId());
        Optional<Loan> loanOptional = loanRepository.findById(userLoanRequest.getLoanId());
         var userLoan = UserLoan.builder().user(userOptioanl.get()).loan(loanOptional.get()).loanAmount(userLoanRequest.getAmount()).build();

        userLoanRepository.save(userLoan);

        return toUserLoanResponse(userLoan);
    }

    @Override
    public void deleteUserLoan(String userLoanId) {
        userLoanRepository.deleteById(userLoanId);
    }

    @Override
    public List<UserLoanResponse> getAllUserLoans() {
        List<UserLoan> userLoans = userLoanRepository.findAll();
        return userLoans.stream()
                .map(this::toUserLoanResponse)
                .collect(Collectors.toList());
    }

    private UserLoanResponse toUserLoanResponse(UserLoan userLoan) {
        UserLoanResponse response = new UserLoanResponse();
        response.setUserLoanId(userLoan.getUserLoanId());
        response.setUserId(userLoan.getUser().getId());
        response.setLoanId(userLoan.getLoan().getLoanId());
        response.setAmount(userLoan.getLoanAmount());
        return response;
    }
}
