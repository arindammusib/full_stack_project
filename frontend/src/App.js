import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Title from './components/Title';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Title/>
      <Nav/>
      <Routes>
      <Route path='/' element={<h1> All listed Products</h1>}/>
      <Route path='/add' element={<h1> add products</h1>}/>
      <Route path='/update' element={<h1> Update </h1>}/>
      <Route path='/logout' element={<h1> Log out user</h1>}/>
      <Route path='/user' element={<h1> profile</h1>}/>
      <Route path='/register' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
