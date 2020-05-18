package com.investing.api.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class InvestingUser extends StoredClass {
    private String firstName;
    private String lastName;
    private String username;

    @OneToMany
    @JoinColumn(name = "id")
    private List<Watchlist> watchlists;

}