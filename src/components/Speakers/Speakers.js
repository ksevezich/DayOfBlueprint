import React from 'react'
import classes from './Speakers.scss'
import SpeakersSection from 'components/SpeakersSection'
import dsg from 'static/sponsors/dsg.png'

export const Speakers = () => (
  <div>
    <div className={classes.speakers} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Speakers </h1>
        <SpeakersSection title={'Alex Deghan'}
          text={'HackDuke is not just about building meaningful projects. \
                It\'s also an open forum to discuss, share and bring to life ideas \
                that aim to make a positive impact on social issues. Look forward \
                to working with experts from non-profits and coding alongside \
                mentors from tech companies!'}
          imagePath={dsg} />
        <SpeakersSection title={'Stephen Lee'}
          text={'The core principle behind hacking for social good is collaboration, \
                and HackDuke\'s project tracks provide an avenue to collaborate with each \
                other, with initiatives at their university and with community organizations.'}
          imagePath={dsg} />
        <SpeakersSection title={'Stay Tuned'}
          beforeText={'We will be adding speakers as we get closer to the event. Want to be a speaker at this event? '}
          linkText={'Let us know!'}
          link={'https://hackduke.typeform.com/to/Q8EGmW?route_receive_mentor=xxxxx'}
          imagePath={dsg} />
      </div>
    </div>
  </div>
)

export default Speakers
