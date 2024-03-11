import './App.css';
import { Navbar} from './Components/Navbar';
import {Textis } from './Components/Textis';
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.background='#042743'
    }
    else{
      setmode('light');
      document.body.style.background='white'

    }
  }
  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>    
    <div className='container'>
    <Textis heading='Enter Text' mode={mode}/>
    </div>
    </>
  );
}
export default App;
