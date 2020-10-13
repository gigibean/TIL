import React, {createContext, useContext} from 'react';
const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div> 안녕하세요 {text}</div>
}
function Parent({text}) {
    return <Child text = {text} />
}

function GrandParent({text}) {
    return <Parent text={text} />
}

function ContextSample() {
    return (
        <MyContext.Provider value="GOOD">   
            <GrandParent />
        </MyContext.Provider>
    )
}

export default ContextSample;