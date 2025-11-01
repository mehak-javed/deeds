import React from 'react'
import Search from './Search'
import BreadcrumbPathway from './BreadcrumbPathway'
import StudentReview from '../Home/StudentReview'
import Steps from './stepstobegin/Steps'
const Pathway = () => {
  return (
    <div>
        <BreadcrumbPathway/>
        <Steps/>
        <StudentReview/>

    </div>
  )
}

export default Pathway