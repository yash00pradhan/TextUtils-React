
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
// import {Link} from 'react-router-dom' ;

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
     <Textforms heading = "Enter your text for analyze below"/>
     </div>
     
    </>
  );
}

export default App;
