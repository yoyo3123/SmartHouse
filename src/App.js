import './App.css';
import Header from './components/Header';
import Homerooms from './components/Homerooms';
import Personalroom from './components/Personalroom';
import Addroom from './components/Addroom';
import { Roomprovider } from './ContextApi';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Roomprovider>
      
      <Header/>
      <BrowserRouter>

        <Routes>

        <Route path='/' element={<Homerooms/>}/>

        <Route path='/addroom' element={<Addroom/>}/>

        <Route path='/room/:name' element={<Personalroom/>}/>




        </Routes>
      
      
      
      
      </BrowserRouter>
      </Roomprovider>
    </div>
  );
}

export default App;
