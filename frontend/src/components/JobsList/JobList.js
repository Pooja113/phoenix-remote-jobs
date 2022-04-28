import React from 'react'
import './JobList.css'
import JobItem from './JobItem'

const JobList = ({postedJobs, onDelete}) => {
  return (
    <section id="jobs-container">
    <h1 className="head-primary">Programming Jobs</h1>
    <div className="jobs">
      { postedJobs.length === 0 ? "No Jobs" :
          postedJobs.map((job)=>{
              return <JobItem job={job} key={job.id} onDelete = {onDelete} />
            })
        }
    </div>
  </section>
  )
}

export default JobList
