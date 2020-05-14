package com.investing.api.models;

import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.List;

@Entity
@Getter
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class StockNote extends StoredClass {

    @OneToOne
    private Watchlist watchlist;

    private String ticker;

    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    private List<Note> notes;
}
