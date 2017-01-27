import React from 'react'
import TracksBox from 'components/TracksBox'
import {Grid, Row, Col} from 'react-bootstrap'
import classes from './MapsGrid.scss'
// import xlabs from 'static/sponsors/conservationxlabs.png'

export const MapsGrid = () => (
  <div>
    <Grid className={classes.grid}>
      <Row className='show-grid'>
        <Col sm={6} md={6} className={classes.leftColumn}>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'Printing'}
              link={''}
              text={'Please reach out to one of the conference staff or volunteers if you would like to print \
              anything. Duke students and affiliates may also use the e-Print system in \
              Environment Hall.NOTE: Each room is equipped with A/V equipment.  '} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'Wifi'}
              link={'https://oit.duke.edu/what-we-do/applications/eduroam'}
              text={'Duke Students, Professors, and Affiliates should use their netID to access the \
              DukeBlue network. Participants from other educational institutions may use their institutional \
              credentials to access the eduroam network. All other participants should use the visitor network. \
              Speak to a conference staff member or volunteer if you have any questions.'} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'Maps'}
              link={'https://oit.duke.edu/what-we-do/applications/eduroam'}
              text={''} />
          </div>
        </Col>
        <Col sm={6} md={6} className={classes.rightColumn}>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'Team Formation'}
              link={''}
              text={'Click here to take the survey and see where you\'ve been placed.'} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'YouTube livestreams'}
              link={'https://www.youtube.com/watch?v=GEYrdeJXvWE&feature=em-share_video_user'}
              text={'Miss a talk? Want to see it again? Click here to see our YouTube channel and livestreams.'} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={'Parking'}
              link={''}
              text={''} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default MapsGrid
