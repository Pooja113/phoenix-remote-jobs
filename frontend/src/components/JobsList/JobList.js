import React from 'react'
import './JobList.css'
import JobItem from './JobItem'
import { useStateValue } from '../../StateProvider';



const JobList = ({onDelete}) => {
  const [{posts},] = useStateValue();
  return (
    <section id="jobs-container">
    <h1 className="head-primary">Programming Jobs</h1>
      { !posts.data ? "No Jobs" :
          posts.data.map((job)=>{
              return (<div key={job._id} className="jobs">
                  <JobItem job={job}  onDelete = {onDelete} />
                </div>)
            })
        }
  </section>
  )
}

export default JobList
