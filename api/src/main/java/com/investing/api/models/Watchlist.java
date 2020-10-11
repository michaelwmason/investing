package com.investing.api.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import java.util.List;

@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
public class Watchlist extends StoredClass {

    private InvestingUser investingUser;
    private List<StockNote> stockNotes;
}
