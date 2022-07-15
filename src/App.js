import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/AboutUs/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Mint from './Pages/Home/Mint';
import Specials from './Pages/Home/Specials';
import Strawberry from './Pages/Home/Strawberry';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/home#mint' element={<Mint />}></Route>
        <Route path='/home#strawberry' element={<Strawberry />}></Route>
        <Route path='/home#specials' element={<Specials />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
