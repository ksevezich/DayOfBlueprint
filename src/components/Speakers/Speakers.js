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
        <SpeakersSection titleFirst={'Alex Dehgan, Conservation X Labs, CEO and Founder'}
          beforeTextFirst={'Alex Dehgan will talk about Invasive Species. Contact him at '}
          linkFirst={'mailto:alexdehgan@gmail.com'}
          linkTextFirst={'here'}
          imagePathFirst={alex}
          titleSecond={'Stephen Lee, U.S. Army Reserach Office, Chief Scientist'}
          beforeTextSecond={'Dr. Stephen T. Lee will discuss Wildlife Trafficking. Contact him at '}
          linkSecond={'mailto:stephen.j.lee28.civ@mail.mil'}
          linkTextSecond={'here'}
          imagePathSecond={stephen} />
        <SpeakersSection titleFirst={'Jason Heckathorn, Forever Oceans, CEO'}
          beforeTextFirst={'Jason Heckathorn is our Keynote speaker. Contact him at '}
          linkFirst={'mailto:jason.heckathorn@foreveroceans.com'}
          linkTextFirst={'here'}
          imagePathFirst={jason}
          titleSecond={'Dan Fay, Microsoft Research, Director of External Research for Earth, Energy, and Environment'}
          beforeTextSecond={'Daniel Fay will discuss Citizen Science. Contact him at '}
          linkSecond={'mailto:dan.fay@microsoft.com'}
          linkTextSecond={'here'}
          imagePathSecond={dan} />
      </div>
    </div>
  </div>
)

export default Speakers
