-- database/migrations/create_user_groups.sql
-- ===========================================

CREATE TABLE user_groups (
    user_id INT NOT NULL,
    group_id INT NOT NULL,

    PRIMARY KEY (user_id, group_id),

    CONSTRAINT fk_user_groups_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_user_groups_group
        FOREIGN KEY (group_id)
        REFERENCES groups(group_id)
        ON DELETE CASCADE
)