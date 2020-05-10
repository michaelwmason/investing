package com.investing.api.controllers;

import com.investing.api.models.InvestingUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.investing.api.services.InvestingUserService;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping(value = "user")
public class InvestingUserController {
    private InvestingUserService investingUserService;

    @Autowired
    public InvestingUserController(InvestingUserService investingUserService) {
        this.investingUserService = investingUserService;
    }

    @GetMapping
    public List<InvestingUser> all() {
        return investingUserService.all();
    }

    @GetMapping(value = "login")
    public InvestingUser login(@RequestBody @NotNull String username) {
        return investingUserService.login(username);
    }
}
