package com.investing.api.services;

import com.investing.api.daos.InvestingUserDao;
import com.investing.api.models.InvestingUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestingUserServiceImpl implements InvestingUserService {
    private final InvestingUserDao investingUserDao;

    @Autowired
    public InvestingUserServiceImpl(InvestingUserDao investingUserDao) {
        this.investingUserDao = investingUserDao;
    }

    public List<InvestingUser> all() {
        return investingUserDao.findAll();
    }

    public InvestingUser login(String username) {
        return investingUserDao.findByUsername(username).orElseThrow(RuntimeException::new);
    }

}
