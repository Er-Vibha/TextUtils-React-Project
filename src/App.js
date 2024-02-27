import './App.css';
import { Navbar} from './Components/Navbar';
import {Textis } from './Components/Textis';

function App() {
  return (
    <>
    <Navbar title='TextUtils' about='about text'/>    
    <div className='container'>
    <Textis heading='Enter Text'/>
    </div>
    </>
  );
}
export default App;
