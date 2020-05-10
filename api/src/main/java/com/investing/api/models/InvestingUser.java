package com.investing.api.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@EqualsAndHashCode(callSuper = true)
public class InvestingUser extends StoredClass {
    private String firstName;
    private String lastName;
    private String userName;

    @OneToMany
    @JoinColumn(name = "id")
    private List<Watchlist> watchlists;

}