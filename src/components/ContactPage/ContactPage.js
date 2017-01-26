import React from 'react'
import classes from './ContactPage.scss'
import AboutSection from 'components/AboutSection'

export const ContactPage = () => (
  <div>
    <div className={classes.about} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Contact Information...</h1>
        <AboutSection title={'EMERGENCY:'}
          text={'If there is a medical, safety, or serious emergency, call 911 immediately. \
          After emergency responders have been contacted and dispatched, \
          please contact one of the DUPD officers at the event and/or an event organizer. '} />
        <AboutSection title={'NON-URGENT CONCERNS'}
          text={'Speak with one of the DUPD officers present at the event. Or call \
          the DUPD non-emergency line: (919) 684-2444'} />
      </div>
    </div>
  </div>
)

export default ContactPage
