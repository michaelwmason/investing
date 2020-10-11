package com.investing.api.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import java.util.List;

@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
public class StockNote extends StoredClass {

    private Watchlist watchlist;

    private String ticker;

    private List<Note> notes;
}
