import React, {useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;
    const onChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // const nextInputs = {
        //     ...inputs,
        //     [e.target.name]: e.target.value,
        // };
        // setInputs(nextInputs)
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name] : value,
        })
    }

    const onRest = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}
            ref={nameInput} 
            />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;