import React, { useEffect, useState } from "react";
import './App.css';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobList from "./components/JobsList/JobList";
import OurWork from "./components/OurWork/OurWork";
import Contact from "./components/Contact/Contact";
import JobForm from "./components/JobForm/JobForm";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';



function App() {

  const ondeleteHandler = (job) => {
    console.log("Delete", postedJobs);
    setPostedJobs(postedJobs.filter((e)=>{
      return e!==job;
    }));
    
    localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  }

  let initJobs;
  if(localStorage.getItem("postedJobs") === null){
    initJobs = [];
  }else{
    initJobs = JSON.parse(localStorage.getItem("postedJobs")); //Obj
  }
 
  const addPostedJob = (title,desc) => {
    const id = uuid();
    const newJobs = {
      id: id,
      title: title,
      desc: desc
    }
    setPostedJobs((prevJob)=>{
      return [newJobs,...prevJob];
    });
    localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  };

  const [postedJobs,setPostedJobs] = useState(initJobs);
  
  useEffect(()=>{
    localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  },[postedJobs])
  
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/"  element={
          <React.Fragment> 
            <Header />
            <Home />
            <JobList postedJobs={postedJobs}  onDelete = {ondeleteHandler} />
            <OurWork />
            <Contact />
            <Footer />
          </React.Fragment>
        } />
        <Route path="/joblist"  element={
          <React.Fragment> 
            <Header />
            <Home />
            <JobList postedJobs={postedJobs}  onDelete = {ondeleteHandler} />
            <Footer />
          </React.Fragment>} 
        />
        <Route path="/jobform"  element={
          <React.Fragment> 
            <Header />
            <JobForm onJobPost={addPostedJob} />
            <Footer />
          </React.Fragment>} 
          />
          <Route path="/contactus"  element={
            <React.Fragment> 
              <Header />
              <Home />
              <Contact />
              <Footer />
            </React.Fragment>} 
            />
            <Route path="/login"  element={
              <React.Fragment> 
                <Header />
                <Login />
                <Footer />
              </React.Fragment>} 
              />
      </Routes>    
  </Router>
  );
}

export default App;
