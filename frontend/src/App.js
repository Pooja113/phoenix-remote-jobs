import React, { useEffect } from "react";
import './App.css';
//import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobsList from "./components/JobsList/JobsList";
import OurWork from "./components/OurWork/OurWork";
import Contact from "./components/Contact/Contact";
import JobForm from "./components/JobForm/JobForm";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
// import * as api from './api'
// //import { getPosts } from "./posts";
// import { FETCH_ALL_JOBS } from "./actionTypes";


function App() {
  const [,dispatch] = useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
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
  // console.log(posts)
  // useEffect( ()=>{
  //   api.fetchPosts().then((res)=>{
  //     console.log(res)
  //     dispatch({
  //     type:FETCH_ALL_JOBS,
  //     payload: {posts : res}
  //   });
  //   })
  //   .catch((err)=>console.log(err))

  // },[dispatch])

  // const ondeleteHandler = (job) => {
  //   setPostedJobs(postedJobs.filter((e)=>{
  //     return e!==job;
  //   }));
    
  //   localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  // }

  // let initJobs;
  // if(localStorage.getItem("postedJobs") === null){
  //   initJobs = [];
  // }else{
  //   initJobs = JSON.parse(localStorage.getItem("postedJobs")); //Obj
  // }
 
  // const addPostedJob = (title,desc) => {
  //   const id = uuid();
  //   const newJobs = {
  //     id: id,
  //     title: title,
  //     desc: desc
  //   }
  //   setPostedJobs((prevJob)=>{
  //     return [newJobs,...prevJob];
  //   });
  //   localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  // };

  //const [postedJobs,setPostedJobs] = useState(initJobs);
  
  // useEffect(()=>{
  //   localStorage.setItem("postedJobs",JSON.stringify(postedJobs))
  // },[postedJobs])
  




  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={
          <React.Fragment> 
            <Header />
            <Home />
            {/*<JobList postedJobs={postedJobs}  onDelete = {ondeleteHandler} />*/}
            <JobsList />
            <OurWork />
            <Contact />
            <Footer />
          </React.Fragment>
        } />
        <Route exact path="/joblist"  element={
          <React.Fragment> 
            <Header />
            <Home />
            <JobsList />
            <Footer />
          </React.Fragment>} 
        />
        <Route exact path="/jobform"  element={
          <React.Fragment> 
            <Header />
            <JobForm />
            <Footer />
          </React.Fragment>} 
          />
          <Route exact path="/contactus"  element={
            <React.Fragment> 
              <Header />
              <Home />
              <Contact />
              <Footer />
            </React.Fragment>} 
            />
            <Route exact path="/login"  element={
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
