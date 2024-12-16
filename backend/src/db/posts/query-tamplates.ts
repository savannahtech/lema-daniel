export const selectPostsTemplate = `
SELECT 
    json_object(
        'id', u.id, 
        'name', u.name, 
        'username', u.username, 
        'email', u.email,
        'phone', u.phone
    ) AS user,
    json_group_array(
        json_object(
            'id', p.id,
            'title', p.title,
            'body', p.body,
            'created_at', p.created_at
        )
        ORDER BY p.created_at DESC
    ) AS posts
FROM 
    users u
LEFT JOIN 
    posts p ON u.id = p.user_id
WHERE 
    u.id = ?
GROUP BY 
    u.id, u.name, u.username, u.email, u.phone;
`;

export const deletePostTemplate = `
DELETE 
FROM posts 
WHERE id = ?
`;

export const createPostTemplate = `
INSERT INTO posts (id, user_id, title, body, created_at)
VALUES (hex(randomblob(16)), ?, ?, ?, strftime('%Y-%m-%dT%H:%M:%S', 'now'))
RETURNING *
`;

