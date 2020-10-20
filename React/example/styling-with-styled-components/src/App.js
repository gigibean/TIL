import React from 'react'
import styled, { css } from 'styled-components'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      // css 사용으로 여기 내부에서 props 사용가능
      width: 10rem;
      height: 10rem;
    `}
`

function App() {
  return <Circle color="teal" huge />
}

export default App
