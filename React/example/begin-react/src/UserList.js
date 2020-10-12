import React, {useEffect} from 'react';


function User({user, onRemove, onToggle}) {
    useEffect(() => {
        console.log("user값이 설정됨", user);
        return () => {
            console.log("user 값이 바뀌기 전", user);
        }
    }, [user]);
    // 여기서 등록한 위 함수는 이 [user](deps) 값이 설정되거나 바뀔 때마다 
    // 호출이 된다.
    // 값이 변경되기 직전엔 cleanup함수가 호출된다.
    // 변경 뿐아니라 처음 컴포넌트가 호출 될 때에도 이 함수가 호출된다.
    return (
        <div>
            <b style={{
                cursor: "pointer",
                color: user.active ? 'green' : 'black'
            }}
            onClick={()=>onToggle(user.id)}
            >{user.username}</b> <span>{user.email}</span> 
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
                )
            }
        </div>
    );
}

export default UserList;