import React, { useEffect } from 'react'
import './JobList.css'
import JobItem from './JobItem'
import { useStateValue } from '../../StateProvider';
import * as api from '../../api'
import { FETCH_ALL_JOBS } from "../../actionTypes";


const JobList = () => {
  const [{posts},dispatch] = useStateValue();
  useEffect( ()=>{
    api.fetchPosts().then((res)=>{
      dispatch({
      type:FETCH_ALL_JOBS,
      payload: {posts : res}
    });
    })
    .catch((err)=>console.log(err))

  },[dispatch])
  return (
    <section id="jobs-container">
    <h1 className="head-primary">Programming Jobs</h1>
      { !posts.data ? "No Jobs" :
          posts.data.map((job)=>{
              return (<div key={job._id} className="jobs">
                  <JobItem job={job} />
                </div>)
            })
        }
  </section>
  )
}

export default JobList
