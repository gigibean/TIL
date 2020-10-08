import React from 'react';

function UserList() {
    const users = [
        {
            id: 1,
            username: 'Kim',
            email: 'kim@gmail.com',
        },
        {
            id: 2,
            username: 'Lee',
            email: "lee@gmail.com",
        },
        {
            id: 3,
            username: 'Park',
            email: 'park@gmail.com',
        }
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>{users[2].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>{users[2].email}</span>
            </div>
        </div>
    );
}

export default UserList;