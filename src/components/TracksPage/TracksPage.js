import React from 'react'
import classes from './TracksPage.scss'
import TracksGrid from 'components/TracksGrid'

export const TracksPage = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.tracks}>
        <h1 className={classes.tracksHeader}>TOPICS</h1>
        <p className={classes.tracksText}>
          Blueprint: People+Wildlife has four tracks designed to
          explore the areas of nature and conservation that directly
          affect humans around the world. All of the tracks will have a
          leading expert at the conference that will help extend ideas
          beyond the event.
        </p>
        <TracksGrid />
      </div>
    </div>
  </div>
)

export default TracksPage
