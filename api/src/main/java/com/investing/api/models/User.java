package com.investing.api.models;
import javax.persistence.Entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import java.util.UUID;

@Entity
@Getter
@EqualsAndHashCode
public class User {
    private UUID id;
    private String firstName;
    private String lastName;
}