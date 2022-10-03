import React from 'react';
import { Fragment } from 'react';
import  { BrowserRouter, Routes, Route } from "react-router-dom";

// import Counter from './components/counter/counter';
import './styles/App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import Shop from './components/shop/shop';
import PlantCare from './components/plantCare/plantCare';
import About from './components/aboutUs/aboutUs';
import Contacts from './components/contacts/contacts';
import {AuthBase, ForgotPass} from './components/Auth/Auth';
import Footer from './components/footer/footer';
import Error404 from './components/error404/error404';
import PlantCard from './components/plantCare/PlantCard'; 
// import PlantCard from './PlantCardInformation';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <div className="content">
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/shop' element={<Shop activate_page={true} pageSize={9}/>}/>
              <Route path='/shop/*' element={<Shop activate_page={true} to_card={true} />}/>
              <Route path='/plantCare' element={<PlantCare activate_page={true} pageSize={4}/>}/>
              <Route path='/plantCare/card/*' element={<PlantCard/>}/>
              <Route path='/aboutUs' element={<About activate_page={true}/>}/>
              <Route path='/contacts' element={<Contacts activate_page={true}/>}/>
              <Route path='/auth/signin' element={<AuthBase/>}/>
              {/* <Route path='/auth/register' element={<Register/>}/> */}
              <Route path='/auth/forgottenpass' element={<ForgotPass/>}/>
              <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </Fragment>

    // <div className="App">
    //   <div className='post'>
    //     <div className='post__content'>
    //       <strong>1. Javascript</strong>
    //       <div>
    //         Javascript - language
    //       </div>
    //     </div>
    //     <div className='post__btns'>
    //       <button>Delete</button>
    //     </div>
    //   </div>
      /* <Counter/> */
     

      
    // </div>
  );
  
}

export default App;
