import React from 'react'
import './JobItem.css'
import img1 from '../../images/logo.jpg';
import { useStateValue } from '../../StateProvider';


const JobItem = ({job, onDelete}) => {
  const [{user},] = useStateValue();
  return (
    <React.Fragment>
      <img src={img1} alt=""/>
      <div className="job-box">
        <h2 className="head-secondary">{job.title}</h2>
        <p>{job.desc}</p>
      </div>
      {user ? 
        (<div className='job__button'>
          <button className="btn" onClick={()=> onDelete(job)}>Delete</button>
        </div>)
        : " "
      } 
    </React.Fragment>
  )
}

export default JobItem
