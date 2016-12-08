import React from 'react'
import classes from './Social.scss'

export const Social = () => (
  <div>
    <div className={classes.footerBackground}>
      <div className={classes.contact}>
        <div className={classes.contactContainer}>

          <a className={classes.footerIcon} href={'mailto:hinfo@dukeblueprint.com'}>
            <i className={'fa fa-envelope'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://www.facebook.com/DukeConservationTech'}>
            <i className={'fa fa-facebook'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://www.instagram.com/duke_conservationtech'}>
            <i className={'fa fa-instagram'}></i>
          </a>
        </div>
        <div className={classes.copyright}>Copyright © 2016 Duke Blueprint (adapted from HackDuke with permission). </div>
      </div>
    </div>
  </div>
)

export default Social
