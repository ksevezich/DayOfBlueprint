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
          beforeText={'Alex Dehgan, CEO and founder of Conservation X Labs, will talk about Invasive Species. Contact him at '}
          link={'mailto:alexdehgan@gmail.com'}
          linkText={'here'}
          imagePath={alex}
          titleSecond={'Stephen Lee, U.S. Army Research Office'}
          beforeTextSecond={'Dr. Stephen T. Lee, Chief Scientist at the U.S. Army Research Office will discuss Wildlife Trafficking. Contact him at '}
          linkSecond={'mailto:stephen.j.lee28.civ@mail.mil'}
          linkTextSecond={'here'}
          imagePathSecond={stephen} />
        <SpeakersSection title={'Jason Heckathorn, Forever Oceans'}
          beforeText={'Jason Heckathorn, CEO of Forever Oceans, is our Keynote speaker. Contact him at '}
          link={'mailto:jason.heckathorn@foreveroceans.com'}
          linkText={'here'}
          imagePath={jason}
          titleSecond={'Dan Fay, Microsoft Research'}
          beforeTextSecond={'Daniel Fay, the Director of External Research for Earth, Energy, and Environment at Microsoft Research, will discuss Citizen Science. Contact him at '}
          linkSecond={'mailto:dan.fay@microsoft.com'}
          linkTextSecond={'here'}
          imagePathSecond={dan} />
      </div>
    </div>
  </div>
)

export default Speakers
