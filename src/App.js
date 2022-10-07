import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/AboutUs/About';
import Coffees from './Pages/AllCoffees/Coffees';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Cart from './Pages/Cart/Cart';
import MyCart from './Pages/Cart/MyCart';
import MyProfile from './Pages/Cart/MyProfile';
import BuyNow from './Pages/Home/BuyNow';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App bg-black">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/coffees' element={<Coffees></Coffees>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/coffees/:id' element={<BuyNow />}></Route>
        <Route path='/dashboard' element={<Cart />}>
          <Route index element={<MyCart />}></Route>
          <Route path='profile' element={<MyProfile/>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
