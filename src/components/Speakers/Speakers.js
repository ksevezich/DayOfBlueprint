import React from 'react'
import classes from './Speakers.scss'
import SpeakersSection from 'components/SpeakersSection'
import alex from 'static/Alex.png'
import stephen from 'static/Stephen.png'
import jason from 'static/Jason.png'
import dan from 'static/Dan.png'
import logo from 'static/blueprint-logo-basic.png'

export const Speakers = () => (
  <div>
    <div className={classes.speakers} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> Speakers </h1>
        <SpeakersSection title={'Alex Dehgan, Conservation X Labs'}
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
        <SpeakersSection title={'Stephen Lee, U.S. ARO'}
          text={'Dr. Stephen T. Lee is the Chief Scientist (ST) at the U.S. \
          Army Research Office (ARO). He is interested in how technology can be \
          used to combat illegal poaching and the wildlife trade in Southern Africa.\
          Dr. Lee makes the case that reducing the illegal wildlife trade and poaching in \
          Africa is in the best interest of the international community regarding safety, \
          security, conservation and goodwill. Further, that science and technology have \
          pivotal roles to play via next generation tools and capabilities.'}
          imagePath={stephen} />
        <SpeakersSection title={'Jason Heckathorn, Forever Oceans'}
          text={'Jason Heckathorn is a high-energy entrepreneur with a track record for success \
          in starting and growing businesses. Jason founded the Lockheed Martin Mobile \
          Fish Pens line of business by reusing defense technologies for sustainable fish \
          farming. He grew the business with commercial contract wins and a TIME Magazine \
          Invention of the Year Award.  In 2014 he became CEO of Forever Oceans when it spun-out.  \
          Current aquaculture focuses span the Middle East, Asia, Central America, & the Caribbean. \
          Jason thrives in markets that require creative business strategies and is bold in undertaking \
          new ventures. He is on the board of two other companies focused on sustainability: \
          Hidden Clover Children’s Books and BluBridge, a sea cucumber company.  \
          He spends his personal time leading missions and conservation trips into the jungles \
          of Central America.  Jason holds three Ivy League degrees in engineering and business \
          and served as a mentor for the KAUST (Saudi Arabia University) Entrepreneurship Program.'}
          imagePath={jason} />
        <SpeakersSection title={'Dan Fay, Microsoft Research'}
          text={'Daniel Fay is the Director of External Research for Earth, Energy, and Environment \
          engagements for Microsoft Research, where he works with academic research projects focused \
          on utilizing computing technologies to aid in scientific and engineering research. Dan has \
          project experience working with High Performance Computing, Grid Computing, collaboration and \
          visualization tools in scientific research. Dan was previously the manager of eScience Program \
          in Microsoft Research where he started Microsoft\'s engagements in eScience including the MSR \
          eScience workshop. Before joining Microsoft in 1992, Dan was a senior software engineer with \
          Digital Equipment Corporation working on OSF/1 and embedded network devices. Dan is a graduate \
          of Northeastern University in Electrical Engineering.'}
          imagePath={dan} />
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
