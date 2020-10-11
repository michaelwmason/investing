package com.investing.api.services;

import com.investing.api.models.InvestingUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestingUserServiceImpl implements InvestingUserService {
    private InvestingUser michael = new InvestingUser("Michael", "Mason", "michael", List.of());
    private InvestingUser amber =new InvestingUser("Amber", "Conrad", "amber", List.of());
    private List<InvestingUser> users = List.of(michael, amber);
    @Autowired
    public InvestingUserServiceImpl() {
    }

    public List<InvestingUser> all() {
        return this.users;
    }

    public InvestingUser login(String username) {
        return username.equals("michael") ? michael:amber;
    }

}
