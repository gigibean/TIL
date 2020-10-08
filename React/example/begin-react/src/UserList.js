import React from 'react';


function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

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
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;