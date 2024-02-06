package com.agrocloud.sanjay.config;

import static com.agrocloud.sanjay.enumerated.Role.ADMIN;

// import javax.management.relation.Role;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.agrocloud.sanjay.model.User;
import com.agrocloud.sanjay.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner{

    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
        return ;
        var user=User.builder()
            .name("Admin")
            .email("admin@123")
            .password(passwordEncoder.encode("Admin@123"))
            .role(ADMIN)
            .build();
            userRepository.save(user);
    }

}
