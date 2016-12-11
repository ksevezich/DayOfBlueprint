import React from 'react'
import classes from './About.scss'
import AboutSection from 'components/AboutSection'

export const About = () => (
  <div>
    <div className={classes.about} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> BLUEPRINT IS ABOUT...</h1>
        <AboutSection title={'IDEATING REVOLUTIONARY SOLUTIONS.'}
          text={'This event brings students and experts together to pioneer Blueprints for  \
          projects/technologies/apps so crazy they just might work. \
          Student organizations will develop and deploy the strongest Blueprints under the mentorship \
          of leading experts.'} />
        <AboutSection title={'PEOPLE+WILDLIFE.'}
          text={'Conservation is more than saving cute wildlife; it also impacts us. Conservation is crucial for our \
          food and water security, disease control, and overall happiness.'} />
        <AboutSection title={'TECH FOR GOOD.'}
          text={'The addition of technology to conservation inspires a niche \
          that has been traditionally neglected. As college students, we can fill \
          this void and create impactful tech for good.'} />
        <AboutSection title={'#PAW2017'}
          text={'Forging connections. Between Universities. Between Industries. Between Species. '} />
      </div>
    </div>
  </div>
)

export default About
