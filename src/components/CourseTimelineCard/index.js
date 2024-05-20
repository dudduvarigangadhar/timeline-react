import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    title,
    courseTitle,
    duration,
    description,
    tagsList,
    categoryId,
  } = courseDetails

  return (
    <div className="courseCard-container">
      <div className="heading-container">
        <h1 className="title-card">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="list-container">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="list-item">
            <p>{eachItem.name}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
