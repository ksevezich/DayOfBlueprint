import React from 'react'
import classes from './StudentGroupsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'

import dcs from 'static/sponsors/DCS.png'
import dida from 'static/sponsors/dida.png'
import dct from 'static/DCTlogo.png'
import deid from 'static/DEIDlogo.png'
import hackduke from 'static/hackduke-logo-black2.png'
import ieee from 'static/IEEE_logo_black.png'
import robotics from 'static/Duke_Robotics.png'
// import acm from 'static/sponsors/acm.jpg'
// import consensys from 'static/sponsors/consensys.png'

class SponsorsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['http://www.dukeconservationtech.com/', 'https://sites.duke.edu/conservationsociety/', 'https://sites.duke.edu/deid/',
        'didacube.co', 'landing.hackduke.org', 'duke-robotics.com', 'https://sites.duke.edu/ieee/'],
      windowWidth: window.innerWidth,
      imageUrls: [dct, dcs, deid, dida, hackduke, robotics, ieee],
      sizes: [3, 2, 2, 2, 2, 2, 2],
      title: 'STUDENT GROUP PARTNERS'
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth})
  }

  renderSponsors () {
    let mapArray = []
    if (this.state.windowWidth < 600) {
      mapArray = [0]
    } else if (this.state.windowWidth < 1000) {
      mapArray = [0, 1]
    } else {
      mapArray = [0, 1, 2]
    }
    return (
      mapArray.map(mod => {
        return this.sponsorsColAtMod(mod, mapArray.length)
      })
    )
  }

  sponsorsColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return <SponsorsItem key={index}
              imageUrl={url}
              sponsorUrl={this.state.sponsorsUrls[index]}
              size={this.state.sizes[index]} />
          }
        })}
      </Col>
    )
  }

// <p className={classes.sponsorsText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.sponsors}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <br />
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row>
                  {this.renderSponsors()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SponsorsPage
