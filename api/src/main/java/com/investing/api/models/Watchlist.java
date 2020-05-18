package com.investing.api.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Entity
@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
public class Watchlist extends StoredClass {

    @OneToOne
    private InvestingUser investingUser;

    @OneToMany
    @JoinColumn(name = "id")
    private List<StockNote> stockNotes;
}
