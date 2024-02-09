package com.agrocloud.sanjay.dto.response;

import com.agrocloud.sanjay.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// import jakarta.persistence.Column;
// import jakarta.persistence.Enumerated;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private String id;

    private String name;

    private String email;

    private String password;

    private Role role;

    private String image;

    private Long phoneNumber;

    private String address;
}
