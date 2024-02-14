package com.agrocloud.sanjay.service;




import com.agrocloud.sanjay.dto.request.PaymentRequest;
import com.agrocloud.sanjay.dto.response.BasicResponse;
import com.agrocloud.sanjay.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllUser();

    PaymentResponse register(PaymentRequest request);

    BasicResponse<PaymentResponse> deletebooking(String paymentId);
}