import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {

  return (
    <Wrapper>
      {/* children */}
      <Hello name="react" color="red"/> 
      <Hello color="orange" />
    </Wrapper>
  );
}

export default App;
