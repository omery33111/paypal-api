import { Outlet } from 'react-router-dom';
import MyNavbar from './features/navigators/MyNavbar';
import MyFooter from './features/navigators/MyFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { initCart } from './features/cart/cartSlice';
import { useAppDispatch } from './app/hooks';



function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() =>{
    dispatch(initCart());
  }, [dispatch])
  
  return (
    <div className="App">
      
      <ToastContainer />
      
      <MyNavbar />

      <Outlet />

      <MyFooter />
      
    </div>
  );
}

export default App;
