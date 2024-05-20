import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={item.id}
          projectDetails={item}
          cardWidth={500}
          cardHeight={300}
        />
      )
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div>
      <h1 className="main-heading">MY JOURNEY OF</h1>
      <h1 className="program-heading">CCBP 4.0</h1>

      <Chrono mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
