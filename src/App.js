import Navbar from './component/navbar';
import React, { useState } from 'react';
import TextForm from './component/textForm';


function App() {

  const [mode, setMode] = useState('light')

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <div style={{
      backgroundColor: (mode === 'dark' ? '#333' : 'white'),
      color : (mode === 'dark' ? 'white' : 'black'),
      height : '100vh',
      width : '100vw'
  }}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
    </div>

  );
}

export default App;
