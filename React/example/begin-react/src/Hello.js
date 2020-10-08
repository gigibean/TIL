import React from 'react';

function Hello({color, name}) {
    console.log(props);
    return <div style={{
        color: color
    }}>Hello World {name}</div>;
}

export default Hello;

