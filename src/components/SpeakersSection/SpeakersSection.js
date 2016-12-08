import React from 'react'
import classes from './SpeakersSection.scss'
import { Col, Row } from 'react-bootstrap'

export const SpeakersSection = (props) => (

  <div>
    <Row className={classes.section}>
      <Col md={3}>
        <div>
          <img className={classes.sectionImage} src={props.imagePath} />
        </div>
      </Col>
      <Col md={3}>
        <div className={classes.sectionHeader}>
          {props.title}
        </div>
      </Col>
      <Col md={6}>
        <div className={classes.sectionText}>
          {props.text}
        </div>
      </Col>
    </Row>
  </div>
)

SpeakersSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  imagePath: React.PropTypes.string.isRequired
}

export default SpeakersSection
