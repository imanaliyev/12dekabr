import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasketProvider from "./Context/BasketContext";
import Home from "./Pages/Home"
import "./assets/style.scss"
import MainLayout from "./Layouts/MainLayout";


function App() {
  return (
    <>

<BrowserRouter >
  <Routes >
    
    <Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>} /> 

    </Route>
 
   
  </Routes>
</BrowserRouter>


  
    


    </>

  );
}

export default App;
