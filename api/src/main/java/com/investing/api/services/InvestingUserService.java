package com.investing.api.services;

import com.investing.api.models.InvestingUser;

import java.util.List;

public interface InvestingUserService {
    List<InvestingUser> all();
    InvestingUser login(String username);
}
