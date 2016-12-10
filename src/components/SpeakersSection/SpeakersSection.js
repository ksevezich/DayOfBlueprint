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
          {(props.link) ? (
            generateTextWithMultiLinks(props.beforeText, props.link, props.linkText)
        ) : props.text }
        </div>
      </Col>
    </Row>
  </div>
)

function generateTextWithMultiLinks (beforeText, link, linkText) {
  return (
    <div>
      {beforeText}
      <a href={link} className={classes.link}>{linkText}</a>
    </div>
  )
}

SpeakersSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  imagePath: React.PropTypes.string.isRequired,
  beforeText: React.PropTypes.string,
  afterText: React.PropTypes.string,
  middleText: React.PropTypes.string,
  linkText: React.PropTypes.string,
  linkText0: React.PropTypes.string,
  link: React.PropTypes.string,
  link0: React.PropTypes.string
}

export default SpeakersSection
