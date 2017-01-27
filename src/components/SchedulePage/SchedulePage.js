import React from 'react'
import classes from './SchedulePage.scss'

export const SchedulePage = () => (
  <div>
    <div className={classes.schedule}>
      <div className={classes.mainText}>
        <img src='calendar.png' alt='Blueprint Calendar' />
      </div>
    </div>
  </div>
)

export default SchedulePage
