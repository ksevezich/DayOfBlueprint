import React from 'react'
import classes from './HeroPage.scss'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <img src='blueprint-logo.png' alt='Blueprint Logo' />
        <h6>Friday night 6-8pm: Speakers + Networking Cocktail Hour <br /> Saturday 10-5pm: Ideation </h6>
        <div className={classes.buttonDiv}>
          <a className={classes.applyLink}
            href={'https://dukeblueprint.typeform.com/to/fhXF3I?route_receive_participant=xxxxx'}>
            <button className={classes.homeButton}> Register Now </button>
          </a>
          <a className={classes.applyLink}
            href={'http://home.dukeblueprint.com/'}>
            <button className={classes.loginButton}> Speakers Bios and FAQ </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default HeroPage
