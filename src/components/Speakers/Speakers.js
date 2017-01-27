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
        <SpeakersSection title={'Alex Dehgan, Conservation X Labs, CEO and Founder'}
          beforeText={'Alex Dehgan will talk about Invasive Species. Contact him at '}
          link={'mailto:alexdehgan@gmail.com'}
          linkText={'here'}
          imagePath={alex} />
        <SpeakersSection title={'Stephen Lee, U.S. Army Reserach Office, Chief Scientist'}
          beforeText={'Dr. Stephen T. Lee will discuss Wildlife Trafficking. Contact him at '}
          link={'mailto:stephen.j.lee28.civ@mail.mil'}
          linkText={'here'}
          imagePath={stephen} />
        <SpeakersSection title={'Jason Heckathorn, Forever Oceans, CEO'}
          beforeText={'Jason Heckathorn is our Keynote speaker. Contact him at '}
          link={'mailto:jason.heckathorn@foreveroceans.com'}
          linkText={'here'}
          imagePath={jason} />
        <SpeakersSection title={'Dan Fay, Microsoft Research, Director of External Research for Earth, Energy, and Environment'}
          beforeText={'Daniel Fay will discuss Citizen Science. Contact him at '}
          link={'mailto:dan.fay@microsoft.com'}
          linkText={'here'}
          imagePath={dan} />
      </div>
    </div>
  </div>
)

export default Speakers
