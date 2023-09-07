import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { getCurrentUser } from './utils/firebase/firebase.utils';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkCurrentUser } from "./store/user/user.reducer";
import { selectAuthIsLoading } from "./store/user/user.selector";
import Spinner from "./components/loading/spinner.component";
const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading)
  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [])
  if (isLoading) {
    return (
      <Spinner />
    );
  } else {
    return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />} ></Route>
        <Route path='auth' element={<Authentication />} ></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>

    )
  }


}

export default App;
