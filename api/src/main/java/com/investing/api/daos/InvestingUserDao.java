package com.investing.api.daos;


import com.investing.api.models.InvestingUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InvestingUserDao extends CrudRepository<InvestingUser, Integer> {
    @Override
    List<InvestingUser> findAll();
}
