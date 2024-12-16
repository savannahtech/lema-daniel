export const selectUsersTemplate = `
SELECT 
    u.*,
    concat(a.street, ', ', a.city, ', ', a.state, ' ', a.zipcode, '.') as address
FROM users u
LEFT JOIN addresses a ON u.id = a.user_id
ORDER BY u.name
LIMIT ?, ?
`;

export const selectCountOfUsersTemplate = `
SELECT COUNT(*) as count
FROM users
`;
