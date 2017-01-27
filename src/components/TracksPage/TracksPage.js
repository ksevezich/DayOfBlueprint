import React from 'react'
import classes from './TracksPage.scss'
import TracksGrid from 'components/TracksGrid'

export const TracksPage = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.tracks}>
        <h1 className={classes.tracksHeader}>Topics Info</h1>
        <p className={classes.tracksText}>
          Blueprint: People+Wildlife has four topics designed to
          explore the areas of nature and conservation that directly
          affect humans around the world. Technology opens the door to reevaluate the status
          quo in these areas of conservation. The four topics will be presented by leading experts
          who are excited to explore these new possibilities. They will then
          work closely with students to develop and extend these Blueprints beyond the event.
        </p>
        <TracksGrid />
      </div>
    </div>
  </div>
)

export default TracksPage
