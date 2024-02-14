package com.agrocloud.sanjay.dto.request;
import com.agrocloud.sanjay.enumerated.Role;

import lombok.Data;

@Data
public class UserRequest {
    private String name;
    private String email;
    private String password;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String address;
}
