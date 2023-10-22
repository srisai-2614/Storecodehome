import './App.css';
import { StoreCode } from './Pages/Storecode/Storecode';
import { Whatwedo } from './Pages/Whatwedo/Whatwedo';
import { Influencer } from './Pages/Influencers/Influencer';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        <div className='Container'>
            <StoreCode/>
           
        </div>
        <div className='Container2' >
            <Whatwedo/>
        </div>
        <div className='Container2' >
            <Influencer/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
