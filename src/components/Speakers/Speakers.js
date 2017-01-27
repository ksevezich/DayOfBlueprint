import React from 'react'
import classes from './Speakers.scss'
import SpeakersSection from 'components/SpeakersSection'
import alex from 'static/Alex.png'
import stephen from 'static/Stephen.png'
import jason from 'static/Jason.png'
import dan from 'static/Dan.png'

export const Speakers = () => (
  <div>
    <div className={classes.speakers} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Speakers </h1>
        <SpeakersSection title={'Alex Dehgan, Conservation X Labs'}
          text={'Alex Dehgan is the founder of ConservationXLabs. He is also the former Chief Scientist at \
          the U.S. Agency for International Development (USAID) and a Rubenstein Fellow at Duke University. '}
          imagePath={alex} />
        <SpeakersSection title={'Stephen Lee, U.S. ARO'}
          text={'Dr. Stephen T. Lee is the Chief Scientist (ST) at the U.S. \
          Army Research Office (ARO).'}
          imagePath={stephen} />
        <SpeakersSection title={'Jason Heckathorn, Forever Oceans'}
          text={'Jason Heckathorn is the CEO of Forever Oceans. He is on the board of two \
          other companies focused on sustainability: \
          Hidden Clover Children’s Books and BluBridge, a sea cucumber company. '}
          imagePath={jason} />
        <SpeakersSection title={'Dan Fay, Microsoft Research'}
          text={'Daniel Fay is the Director of External Research for Earth, Energy, and Environment \
          engagements for Microsoft Research.'}
          imagePath={dan} />
      </div>
    </div>
  </div>
)

export default Speakers
