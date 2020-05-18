CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table investing_user (
    id uuid not null default uuid_generate_v1(),
    created_date timestamp default NOW(),
    updated_date timestamp default NOW(),
    first_name varchar(255),
    last_name varchar(255),
    username varchar(255) UNIQUE,
    primary key (id)
);

create table watchlist (
    id uuid not null default uuid_generate_v1(),
    created_date timestamp default NOW(),
    updated_date timestamp default NOW(),
    investing_user_id uuid,
    primary key (id),
    constraint fk_investing_user foreign key (investing_user_id) references investing_user
);

create table stock_note (
    id uuid not null default uuid_generate_v1(),
    created_date timestamp default NOW(),
    updated_date timestamp default NOW(),
    notes jsonb,
    ticker varchar(255),
    watchlist_id uuid,
    primary key (id),
    constraint fk_watchlist foreign key (watchlist_id) references watchlist
);
