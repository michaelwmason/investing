package com.investing.api.controllers;

import com.investing.api.models.InvestingUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @GetMapping(value = "/login/{username}")
    public InvestingUser login(@PathVariable @NotNull String username) {
        return investingUserService.login(username);
    }
}
