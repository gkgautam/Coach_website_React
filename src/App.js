import './App.css'
import Home from './Home';
import Products from './Products';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:pid" element={<Products />}>
        </Route>
      </Routes>


    </>
  )
}

export default App;
