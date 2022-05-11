import React, { useState } from 'react'
import './JobForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
//import { createPosts } from '../../posts';
import * as api from '../../api'
import { CREATE_JOBS } from "../../actionTypes";


const JobForm = ({ onJobPost }) => {
  const [{user},dispatch] = useStateValue();

  const [jobPost , setJobPost] = useState({
    title: '',
    desc: '',
    // creator:'',
    // selectedFile:''
  })

  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
 // const [wordCount, setWordCount] = useState("");
  const navigate = useNavigate();
  

  // const titleHandler = (e) => {
  //   setTitle(e.target.value);
  // }

  // const descHandler = (e) => {
  //   setDesc(e.target.value);
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    api.createPosts(jobPost).then((res)=>{
    dispatch({
      type:CREATE_JOBS,
      payload: {posts : res}
    });
    navigate('/joblist')
    })
    .catch((err)=>console.log(err))
   
  }

  return (
    <section id='jobpost'>
      <div className='jobpost__heading'>
        <h1 className="head-primary">Reach the largest remote community on the web</h1>
      </div>
     
      <div id='jobpost__form'>
        {user ?
          (<React.Fragment><h1 className="head-primary">Tell us about Position</h1>
          <div className='jobpost__form__info'>
            <form  onSubmit={submitHandler} >
                <div className="form-group">
                  <label htmlFor='jobtitle'> Job Title</label>
                  <input id='jobtitle' type='text' name='title' value={jobPost.title} onChange={(e) => setJobPost({...jobPost, title: e.target.value}) } />
                </div>
                <div className="form-group">
                  <label htmlFor='jobdesc'> Job Description</label>
                  <textarea id='jobdesc' rows='4' name='desc' value={jobPost.desc} onChange={(e) => setJobPost({...jobPost, desc: e.target.value}) } />
                </div>
                <div>Total Words : {/*(desc.split(" ").length-1) */}
                  </div>
                <button className="btn">Submit</button>
              </form>
          </div></React.Fragment>) :
          (<React.Fragment>
          <h1 className="head-primary">Please Log In to Post Job</h1>
          <div className='jobpost__Login'>
            <Link to='/login'>
              Log In
            </Link>
          </div></React.Fragment>) }
      </div>
    </section>
  )
}

export default JobForm;
