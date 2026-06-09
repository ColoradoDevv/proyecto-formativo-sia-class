-- database/migrations/create_groups.sql
-- ===========================================

CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);