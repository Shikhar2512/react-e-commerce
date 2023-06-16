import Home from "./routes/home/home.component";

import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
const Shop = ()=>{
  return(<p>dsadasdasdasd</p>)
}
const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home className='categories-container' />}></Route>
        <Route path='shop' element={<Shop />} ></Route>
        <Route path ='auth' element={<Authentication />} ></Route>
      </Route>
    </Routes>


  );
}

export default App;
