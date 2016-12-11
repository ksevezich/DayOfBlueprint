import React from 'react'
import classes from './Speakers.scss'
import SpeakersSection from 'components/SpeakersSection'
import alex from 'static/Alex.png'
import stephen from 'static/Stephen.png'
import logo from 'static/blueprint-logo.png'

export const Speakers = () => (
  <div>
    <div className={classes.speakers} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Speakers </h1>
        <SpeakersSection title={'Alex Deghan'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Suspendisse eu nisl sed velit convallis scelerisque eget sed nunc. \
          Donec ut turpis accumsan, lobortis turpis eu, tristique ante. \
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur \
          ridiculus mus. Nullam fermentum nisl est, id interdum nibh semper et. \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          imagePath={alex} />
        <SpeakersSection title={'Stephen Lee'}
          text={'Dr. Stephen T. Lee is the Chief Scientist (ST) at the U.S. \
          Army Research Office (ARO). He is interested in how technology can be \
          used to combat illegal poaching and the wildlife trade in Southern Africa.\
          "Dr. Lee makes the case that reducing the illegal wildlife trade and poaching in \
          Africa is in the best interest of the international community regarding safety, \
          security, conservation and goodwill. Further, that science and technology have \
          pivotal roles to play via next generation tools and capabilities."'}
          imagePath={stephen} />
        <SpeakersSection title={'Stay Tuned'}
          beforeText={'We will be adding speakers as we get closer to the event. Want to be a speaker at this event? '}
          linkText={'Let us know!'}
          link={'mailto:speakers@dukeblueprint.com'}
          imagePath={logo} />
      </div>
    </div>
  </div>
)

export default Speakers
