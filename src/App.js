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

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
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
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='review' element={<GiveReview></GiveReview>}></Route>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>

       </Route>
     </Routes>
     <ToastContainer/>
     <Footer></Footer>
    </div>
  );
}

export default App;
