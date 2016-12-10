import React from 'react'
import Scroll from 'react-scroll'
// import classes from './HomeView.scss'
import HeroPage from 'components/HeroPage'
import TracksPage from 'components/TracksPage'
import About from 'components/About'
import Speakers from 'components/Speakers'
import FAQ from 'components/FAQ'
import SponsorsPage from 'components/SponsorsPage'
import StudentGroupsPage from 'components/StudentGroupsPage'
import Social from 'components/Social'

export const HomeView = () => (
  <div>
    <HeroPage />
    <Scroll.Element name='aboutScrollPoint'></Scroll.Element>
    <About />
    <Scroll.Element name='tracksScrollPoint'></Scroll.Element>
    <TracksPage />
    <Scroll.Element name='speakersScrollPoint'></Scroll.Element>
    <Speakers />
    <Scroll.Element name='faqScrollPoint'></Scroll.Element>
    <FAQ />
    <Scroll.Element name='sponsorsScrollPoint'></Scroll.Element>
    <SponsorsPage />
    <StudentGroupsPage />
    <Social />
  </div>
)

export default HomeView
