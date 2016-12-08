import React from 'react'
import classes from '../About/About.scss'
import faqclasses from '../FAQ/FAQ.scss'
import { Col, Row } from 'react-bootstrap'
import FAQSection from 'components/FAQSection'

const title = 'FAQS'

export const FAQ = () => (
  <div>
    <div className={faqclasses.faq}>
      <h1 className={classes.header}>
        {title}
      </h1>
      <Row style={{'paddingTop': '30px'}}>
        <Col md={4}>
          <FAQSection title={'Prizes?'}
            text={'We will have a grand cash prize for the best Blueprint + prizes \
                  for the winning Blueprint from each topic. Other merchandise from \
                  sponsors will be at the events.'} />
          <FAQSection title={'What is a Blueprint?'}
            text={'A Blueprint is anything you want it to be (app mock-up, \
                  CAD model, report, video) – as long as you can explain to the judges \
                  how it could be developed into a radically new solution to one of \
                  the four topics.'} />
          <FAQSection title={'When? Where?'}
            text={'January 27th-28th, Duke’s West Campus. The first evening \
                  will be held at Penn Pavillion, and the next day will be held at \
                  Environmental Hall.'} />
          <FAQSection title={'Who can participate?'}
            text={'You can participate as long as you\'re a student   \
                  (undergraduate or graduate)! If you\'re a new   \
                  grad, we\'d love to have you too.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'Who can I work with?'}
            text={'Anyone! (as long as the group is between 3 and 7). \
                  We will send a link out during the start of the first \
                  night of speeches so groups can be formed and organized \
                  after hearing from the experts. If you don’t have a group, \
                  don’t worry! We will make sure to pair you with some cool people!'} />
          <FAQSection title={'Anything I should remember to bring?'}
            text={'Your brain. Your radical ideas and perhaps a laptop, writing device.'} />
          <FAQSection title={'I don\'t go to Duke, can I still come?'}
            text={'YES, and invite your friends too! We want to spread \
            the conservation technology bug far and wide. '} />
          <FAQSection title={'I don’t know anything about environmental science or conservation…'}
            text={'Good… You haven’t been corrupted by the knowledge of \
            the status quo. New ideas are what we are looking for.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'I want to volunteer or mentor! How can I help?'}
            beforeText={'To help with logistics day of, sign up to '}
            linkText={'volunteer'}
            link={'https://hackduke.typeform.com/to/e7BfyC?route_receive_volunteer=xxxxx'}
            middleText={'. If you\'re looking to'}
            linkText0={'mentor or speak'}
            link0={'https://hackduke.typeform.com/to/Q8EGmW?route_receive_mentor=xxxxx'}
            afterText={'to students about your work \
            in this area, let us know!'} />

          <FAQSection title={'I\'m not an engineer/computer science expert...'}
            text={'This event is about crazy ideas that might just work – \
            anyone can come up with those when surrounded by some awesome people.'} />
          <FAQSection title={'How can I become a sponsor?'}
            text={'Email us at sponsorship@dukeblueprint.com.'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default FAQ
