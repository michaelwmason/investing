package com.investing.api.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Getter
@EqualsAndHashCode
public class Watchlist extends StoredClass{

    @OneToOne
    private InvestingUser investingUser;


}
