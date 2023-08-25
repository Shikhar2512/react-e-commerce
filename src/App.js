import Home from "./routes/home/home.component";
import {useEffect } from "react";
import { authStateChangeListner, createUserDocumentFromAuth, getCurrentUser } from './utils/firebase/firebase.utils';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser().then((userAuth)=> console.log(userAuth));
  }, []) 
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />} ></Route>
        <Route path='auth' element={<Authentication />} ></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Route>

    </Routes>


  );
}

export default App;
