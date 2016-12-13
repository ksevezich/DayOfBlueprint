import React from 'react'
import classes from './Speakers.scss'
import SpeakersSection from 'components/SpeakersSection'
import alex from 'static/Alex.png'
import stephen from 'static/Stephen.png'
import logo from 'static/blueprint-logo-basic.png'

export const Speakers = () => (
  <div>
    <div className={classes.speakers} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Speakers </h1>
        <SpeakersSection title={'Alex Deghan'}
          text={'Alex Dehgan is the founder of ConservationXLabs, a conservation technology \
          start-up focused on developing “Conservation 3.0.” He is also the former Chief Scientist at \
          the U.S. Agency for International Development (USAID) and a Rubenstein Fellow at Duke University. \
          As part of Obama’s promise to restore science and technology at USAID, Alex leveraged or \
          raised $500 million dollars in less than four years to establish the USAID Development Lab. \
          He also led efforts to create Afghanistan’s first national park, conducted the first \
          comprehensive biological surveys of the country in 30 years, helped develop Afghanistan’s \
          biodiversity conservation laws and policies, and curtailed illegal wildlife trade on US and \
          ISAF military bases. He was named an “Icon of Science” by Seed Magazine, and received the World \
          Technology Award for Policy in 2011.'}
          imagePath={alex} />
        <SpeakersSection title={'Stephen Lee'}
          text={'Dr. Stephen T. Lee is the Chief Scientist (ST) at the U.S. \
          Army Research Office (ARO). He is interested in how technology can be \
          used to combat illegal poaching and the wildlife trade in Southern Africa.\
          Dr. Lee makes the case that reducing the illegal wildlife trade and poaching in \
          Africa is in the best interest of the international community regarding safety, \
          security, conservation and goodwill. Further, that science and technology have \
          pivotal roles to play via next generation tools and capabilities.'}
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
