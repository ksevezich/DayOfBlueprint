import React from 'react'
import TracksBox from 'components/TracksBox'
import {Grid, Row, Col} from 'react-bootstrap'
import classes from './TracksGrid.scss'

export const TracksGrid = () => (
  <div>
    <Grid className={classes.grid}>
      <Row className='show-grid'>
        <Col sm={6} md={6} className={classes.leftColumn}>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'INVASIVE SPECIES'}
              link={'http://hackduke.tumblr.com/tagged/inequality'}
              text={'Introduced species can wreak havoc on vital ecosystems \
                    that we rely on every day. Once established they are hard \
                    to remove using current techniques. We need to find new \
                    technology and techniques that can stop the billions of \
                    dollars of damage these species cause.'} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'ILLEGAL WILDLIFE TRAFFICKING'}
              link={'http://hackduke.tumblr.com/tagged/health-&-wellness'}
              text={'The illegal wildlife trade has decimated Rhino, Elephant, \
                    Big Cats, and many other animal populations; \
                    however, it goes beyond animals. This industry \
                    that runs side-by-side with human trafficking, \
                    the illegal weapons trade, and drugs. Technical \
                    devices and new techniques need to be created to \
                    stop the killing\/capture of animals, track the trade, \
                    and stop the sale.  '} />
          </div>
        </Col>
        <Col sm={6} md={6} className={classes.rightColumn}>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'HARMFUL HUMAN-WILDLIFE INTERACTION'}
              link={'http://hackduke.tumblr.com/tagged/energy-&-environment'}
              text={'The most open category, Humans harm wildlife, wildlife harm humans. \
                    Communities all over the world desperately need technical solutions \
                    to stop these harmful, and often deadly interactions. Simple \
                    technology is lacking in areas such as dangerous animal detection, \
                    by\-catch prevention, pollution control, and habitat restoration.'} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'CITIZEN SCIENCE AND RESOURCE MANAGAMENT'}
              link={'http://hackduke.tumblr.com/tagged/education'}
              text={'This track is about giving power to the people. \
                    Every person on the planet has interactions with nature, \
                    but very few contribute to our understanding of our \
                    natural world. Can we make it easy for people to add \
                    to the science of the world through app development \
                    and emerging technologies like drones? Is it then \
                    possible to turn that information into useful data \
                    that can help us preserve our precious resources and way of \
                    life?'} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TracksGrid
