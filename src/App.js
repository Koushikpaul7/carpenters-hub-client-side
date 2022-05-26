import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Products from './Components/Product/Products';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import RequireAuth from './Components/Login/RequireAuth';
import PurchasePage from './Components/Product/PurchasePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import Review from './Components/Dashboard/GiveReview';
import GiveReview from './Components/Dashboard/GiveReview';
import MyProfile from './Components/Dashboard/MyProfile';
import Users from './Components/Dashboard/Users';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import ManageProducts from './Components/Dashboard/ManageProducts';
import AddProducts from './Components/Dashboard/AddProducts';
import RequireAdmin from './Components/Login/RequireAdmin';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Payment from './Components/Dashboard/Payment';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio';
import Notfound from './Components/Notfound';

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <div className='App'>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/products' element={<RequireAuth>
        <Products></Products>
       </RequireAuth>}></Route>
       <Route path='/products/:productId' element={<RequireAuth>
        <PurchasePage></PurchasePage>
       </RequireAuth>}></Route>


       <Route path='/dashboard' element={<RequireAuth>
       <Dashboard></Dashboard>
       </RequireAuth>}>
       <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
        <Route path='review' element={<GiveReview></GiveReview>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='users' element={<RequireAdmin>
          <Users></Users>
        </RequireAdmin>}></Route>
        <Route path='manageOrders' element={<RequireAdmin>
          <ManageAllOrders></ManageAllOrders>
        </RequireAdmin>}></Route>
        <Route path='manageProducts' element={<RequireAdmin>
          <ManageProducts></ManageProducts>
        </RequireAdmin>}></Route>
        <Route path='addProduct' element={<RequireAdmin>
          <AddProducts></AddProducts>
        </RequireAdmin>}></Route>

       </Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
     <ToastContainer/>
     <Footer></Footer>
    </div>
  );
}

export default App;
