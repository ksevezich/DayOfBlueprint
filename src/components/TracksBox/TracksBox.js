import React from 'react'
import classes from './TracksBox.scss'

export const TracksBox = (props) => (
  <div>
    <div className={classes.heading}>
      <p>{props.track}</p>
    </div>
    <div className={classes.paragraph}>
      <p>{props.text} <br /> <br />
        <a href={props.link} className={classes.link}>
          <button className={classes.moreButton}> Learn More... Coming Soon </button>
        </a> </p>
      <div />
    </div>
  </div>
)

TracksBox.propTypes = {
  track: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  sponsorImagePath: React.PropTypes.string.isRequired
}

export default TracksBox
/*        {'This topic sponsored by:'}
        <img className={classes.sponsorImage} src={props.sponsorImagePath} /> */
