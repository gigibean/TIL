import React from 'react';

function Hello({color, name}) {
    return <div style={{
        color: color
    }}>Hello World {name}</div>;
}

Hello.defaultProps = {
    name: 'no name'
}
export default Hello;

