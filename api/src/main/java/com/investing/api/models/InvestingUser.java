package com.investing.api.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class InvestingUser extends StoredClass {
    private String firstName;
    private String lastName;
    private String username;

    private List<Watchlist> watchlists;

}