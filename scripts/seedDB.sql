create database taskmanagement;

-- run application with force trur for sequelize in server.js

SELECT *
FROM taskmanagement.users;


INSERT INTO taskmanagement.users
('email',
'password',
'name',
'type',
'status',
'createdAt',
'updatedAt')
VALUES
    ('admin@mail.com',
        '$2a$10$d8Oi6cRBJxMScYpyitDEmOn5T2ZH1TONj5.OQZYki0E4dc.tZkVH.',-- value is 1 (after creating real admin delete this account)
        'Administrator',
        'admin',
        'Active',
        '2020-04-21 12:18:46',
        '2020-04-21 12:18:46'
);
