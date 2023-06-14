import Home from "./routes/home/home.component";

import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = ()=>{
  return(<p>dsadasdasdasd</p>)
}
const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home className='categories-container' />}></Route>
        <Route path='shop' element={<Shop  />} ></Route>
        <Route path='sign-in' element={<SignIn   />} ></Route>
      </Route>
    </Routes>


  );
}

export default App;
