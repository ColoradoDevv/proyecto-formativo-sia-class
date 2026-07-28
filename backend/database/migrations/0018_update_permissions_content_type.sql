UPDATE permissions
SET content_type_id = 1
WHERE permission_codename IN (
    'list_users',
    'create_users',
    'report_users',
    'visualize_users',
    'edit_users',
    'delete_users'
);