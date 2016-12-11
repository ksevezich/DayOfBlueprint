import React from 'react'
import classes from './HeroPage.scss'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <img src='blueprint-logo.png' alt='Blueprint Logo' />
        <h6>January 27-28, 2017</h6>
        <div className={classes.buttonDiv}>
          <a className={classes.applyLink}
            href={'https://dukeblueprint.typeform.com/to/fhXF3I?route_receive_participant=xxxxx'}>
            <button className={classes.homeButton}> Apply Now </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default HeroPage
