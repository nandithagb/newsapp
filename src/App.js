import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import New from "./components/New";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const pagesize=5;
  const [progress,setProgress]=useState(0);

 
    return (
      <div>
          <Router>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
      />
       <Routes>
       <Route path="/"element={<New setProgress={ setProgress }     key="general " pagesize={pagesize} country="in" category="general"/>}></Route>
          <Route exact path="/business"element={<New setProgress={ setProgress }    key="business "pagesize={pagesize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment"element={<New setProgress={ setProgress }    key="entertainment " pagesize={pagesize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general"element={<New setProgress={ setProgress }   key="general " pagesize={pagesize} country="in" category="general"/>}></Route>
          <Route exact path="/health"element={<New setProgress={ setProgress }    key="health " pagesize={pagesize} country="in" category="health"/>}></Route>
          <Route exact path="/science"element={<New setProgress={setProgress }    key="science " pagesize={pagesize} country="in" category="science"/>}></Route>
          <Route exact path="/sports"element={<New setProgress={ setProgress }     key="sports "pagesize={pagesize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology"element={<New setProgress={ setProgress }     key="technology "pagesize={pagesize} country="in" category="technology"/>}></Route>
        </Routes>
       </Router>
      </div>
    )
  
}
export default App

