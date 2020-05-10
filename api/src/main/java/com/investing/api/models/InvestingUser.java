package com.investing.api.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@EqualsAndHashCode
public class InvestingUser {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String firstName;
    private String lastName;
}