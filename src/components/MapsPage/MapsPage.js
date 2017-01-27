import React from 'react'
import classes from './MapsPage.scss'
import MapsGrid from 'components/MapsGrid'

export const MapsPage = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.tracks}>
        <h1 className={classes.tracksHeader}>Maps and Campus Info</h1>
        <p className={classes.tracksText}>
          Blueprint will take place in Penn Pavillion on Friday and Environment Hall on Saturday.
        </p>
        <MapsGrid />
      </div>
    </div>
  </div>
)

export default MapsPage
