import React from 'react'
import Scroll from 'react-scroll'
// import classes from './HomeView.scss'
import HeroPage from 'components/HeroPage'
import TracksPage from 'components/TracksPage'
import Speakers from 'components/Speakers'
import SponsorsPage from 'components/SponsorsPage'
import StudentGroupsPage from 'components/StudentGroupsPage'
import Social from 'components/Social'
import SchedulePage from 'components/SchedulePage'
import ContactPage from 'components/ContactPage'
import MapsPage from 'components/MapsPage'

export const HomeView = () => (
  <div>
    <HeroPage />
    <Scroll.Element name='scheduleScrollPoint'></Scroll.Element>
    <SchedulePage />
    <Scroll.Element name='contactScrollPoint'></Scroll.Element>
    <ContactPage />
    <Scroll.Element name='mapsScrollPoint'></Scroll.Element>
    <MapsPage />
    <Scroll.Element name='speakersScrollPoint'></Scroll.Element>
    <Speakers />
    <Scroll.Element name='tracksScrollPoint'></Scroll.Element>
    <TracksPage />
    <Scroll.Element name='sponsorsScrollPoint'></Scroll.Element>
    <SponsorsPage />
    <StudentGroupsPage />
    <Social />
  </div>
)

export default HomeView
