import React from 'react'
import classes from './SpeakersSection.scss'
import { Col, Row } from 'react-bootstrap'

export const SpeakersSection = (props) => (

  <div>
    <Row className={classes.section}>
      <Col md={1}>
        <div>
          <img className={classes.sectionImage} src={props.imagePathFirst} />
        </div>
      </Col>
      <Col md={2}>
        <div className={classes.sectionHeader}>
          {props.titleFirst}
        </div>
      </Col>
      <Col md={2}>
        <div className={classes.sectionText}>
          {(props.linkFirst) ? (
            generateTextWithMultiLinks(props.beforeTextFirst, props.linkFirst, props.linkTextFirst)
        ) : props.textFirst }
        </div>
      </Col>
      <Col md={1}>
        <div>
          <img className={classes.sectionImage} src={props.imagePathSecond} />
        </div>
      </Col>
      <Col md={2}>
        <div className={classes.sectionHeader}>
          {props.titleSecond}
        </div>
      </Col>
      <Col md={2}>
        <div className={classes.sectionText}>
          {(props.linkSecond) ? (
            generateTextWithMultiLinks(props.beforeTextSecond, props.linkSecond, props.linkTextSecond)
        ) : props.textSecond }
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
  titleFirst: React.PropTypes.string.isRequired,
  textFirst: React.PropTypes.string.isRequired,
  imagePathFirst: React.PropTypes.string.isRequired,
  beforeTextFirst: React.PropTypes.string,
  afterTextFirst: React.PropTypes.string,
  middleTextFirst: React.PropTypes.string,
  linkTextFirst: React.PropTypes.string,
  linkText0First: React.PropTypes.string,
  linkFirst: React.PropTypes.string,
  link0First: React.PropTypes.string,
  titleSecond: React.PropTypes.string.isRequired,
  textSecond: React.PropTypes.string.isRequired,
  imagePathSecond: React.PropTypes.string.isRequired,
  beforeTextSecond: React.PropTypes.string,
  afterTextSecond: React.PropTypes.string,
  middleTextSecond: React.PropTypes.string,
  linkTextSecond: React.PropTypes.string,
  linkText0Second: React.PropTypes.string,
  linkSecond: React.PropTypes.string,
  link0Second: React.PropTypes.string
}

export default SpeakersSection
