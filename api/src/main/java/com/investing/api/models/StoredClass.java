package com.investing.api.models;

import lombok.Getter;
import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
public abstract class StoredClass {

    private UUID id;
    private ZonedDateTime createdDate;
    private ZonedDateTime updatedDate;
}
