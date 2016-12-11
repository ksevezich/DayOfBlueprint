import React from 'react'
import TracksBox from 'components/TracksBox'
import {Grid, Row, Col} from 'react-bootstrap'
import classes from './TracksGrid.scss'
import xlabs from 'static/sponsors/conservationxlabs.png'

export const TracksGrid = () => (
  <div>
    <Grid className={classes.grid}>
      <Row className='show-grid'>
        <Col sm={6} md={6} className={classes.leftColumn}>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'INVASIVE SPECIES'}
              link={''}
              text={'Introduced species can wreak havoc on vital ecosystems \
                    that we rely on every day. Once established they are hard \
                    to remove using current techniques. We need to find new \
                    technology and methods that can prevent the billions of \
                    dollars of damage caused by these species.'}
              sponsorImagePath={xlabs} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'ILLEGAL WILDLIFE TRAFFICKING'}
              link={''}
              text={'The illegal wildlife trade has decimated species such as Rhinos, Elephants, and \
                    the Big Cats. This industry \
                    runs side-by-side with human trafficking, \
                    illegal weapons trade, and illicit drug smuggling. Technologies have the potential to \
                    disrupt this cycle by preventing the kill and capture of animals, tracking the trade, \
                    and stopping the sale.  '}
              sponsorImagePath={xlabs} />
          </div>
        </Col>
        <Col sm={6} md={6} className={classes.rightColumn}>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'HARMFUL HUMAN-WILDLIFE INTERACTION'}
              link={''}
              text={'As habitat encroachment increases, so does the risk of mutually harmful \
                    interaction.  By decreasing these interactions, we can protect vulnerable \
                    animal populations and our communities. Communities all over the world \
                    desperately need technical solutions to stop harmful, and often-deadly \
                    interactions. Simple technology is lacking in areas such as dangerous animal \
                    detection, by-catch prevention, pollution control, and habitat restoration.'}
              sponsorImagePath={xlabs} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'CITIZEN SCIENCE AND RESOURCE MANAGEMENT'}
              link={''}
              text={'Citizen science enables the democratization of resources, \
                    giving control to the people. \
                    Every person on this planet has interactions with nature, \
                    but very few contribute to our understanding of our \
                    natural world. Can we make it easy for people to add \
                    to the science of the world through app development \
                    and emerging technologies like drones? Is it then \
                    possible to turn that information into useful data \
                    that can help us preserve our precious resources and way of \
                    life?'}
              sponsorImagePath={xlabs} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TracksGrid
