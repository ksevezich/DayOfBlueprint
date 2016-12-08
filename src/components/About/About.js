import React from 'react'
import classes from './About.scss'
import AboutSection from 'components/AboutSection'

export const About = () => (
  <div>
    <div className={classes.about} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> BLUEPRINT:<br />PEOPLE + WILDLIFE<br />IS ABOUT</h1>
        <AboutSection title={'“BLUEPRINT” PLANS → IMPACTFUL SOLUTIONS.'}
          text={'At this event we want students to come up with Blueprints for  \
          projects/technology/apps that are so crazy that they might just work. \
          On-campus student organizations with the skills to make the ideas a reality \
          will then develop and deploy them under the mentorship of leading experts.'} />
        <AboutSection title={'#TECH4GOOD.'}
          text={'Mainstream technologies have widely dismissed conservation as a \
          viable area of development due to the lack of money in the area. \
          As college students, we can fill this void and create impactful tech for good.'} />
        <AboutSection title={'PEOPLE+WILDLIFE.'}
          text={'Conservation is more than saving cute wildlife; it impacts people \
          more than almost anything else, as a precursor to food and water security, \
          disease control and overall happiness.'} />
      </div>
    </div>
  </div>
)

export default About
