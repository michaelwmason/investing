package com.investing.api.models;

import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
@MappedSuperclass
public abstract class StoredClass {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private UUID id;

    @CreationTimestamp
    private ZonedDateTime createdDate;

    @UpdateTimestamp
    private ZonedDateTime updatedDate;
}
