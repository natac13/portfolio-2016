import React, { PropTypes } from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import AltHeader from '../AltHeader/';

import style from './style.scss';

function Tutoring(props) {
  const { actions } = props;
  return (
    <div className={style.wrapper}>
      <AltHeader pathname="Tutoring Service" />
      <p>Are you an Electrical Apprentice struggling through trade school.
      Having trouble with RLC ciruits? Motor Calculations? Electrical Code?</p>

      <h3 className={style.subTitle}>Who Do I Tutor?</h3>
      <p>Electrical Apprentices: enrolled in trade school or for C of Q Preparation.</p>

      <h3 className={style.subTitle}>Who am I / Qualifications to do this job?</h3>
      <p>Currently a 4th term apprentice in the IBEW (Give link to about page),
      finishing 3rd highest in my class with a 4.17 GPA and receiving Dean Honor's
      in all 3 levels.</p>



      <h3 className={style.subTitle}>Where?</h3>
      <p>I can drive to your location given it be within a 30-45 minute radius drive from London, Ontario</p>
        <p>We can meet at a library.</p>

      <h3 className={style.subTitle}>When?</h3>
        <p>Upon Request. We can connect and then find a time which works best for you.</p>

      <h3 className={style.subTitle}>How?</h3>
      <p>Throught experience I have found the best way to convey electrical theory
      is through visual drawnings on a board. For this purpose I will utilize a whiteboard.
      Working throught RLC circuit analysis, motor calculations, service calculations,
      etc all benefit from putting as much information down on paper in front of you.</p>

      <h3 className={style.subTitle}>Why?</h3>
        <p>Going through trade school I found the best way for me to study was to
          tutoring fellow students. My tought was: "If I am able to confidently
          help someone understand a concept or handle mathimatical calculation with
          ease, then I was soild in my own understanding.
          Throught this process I received a ton of positive feedback from both
          the students as well as some of the instructors who witnessed some of my
          sessions; normally being with 1-4 other students a whiteboard and myslef.
          With having the experience through attendind trade school and tutoring
          other students I have gained a unique insight into where most people will
          get stuck and can easily pick up on the weak points you maybe having.
          Seeing the growing demand for skilled trades via the inceased amount of
          trade school intakes I was apart of I know there will more students
          looking to get a little helping hand.</p>

      <p className={style.price}>Price $20 - $30 / Hour</p>
      <List className={style.subjects}>
          <ListSubHeader caption="What Subjects I Cover" />
          <ListItem
            caption="Electrical Theory"
            legend="Electromagnetism, AC/DC, Motors, Generators, Transformers"
          />
          <ListItem
            caption="RLC Circuit Analysis"
            legend="From purely resistive circuits to full RLC circuits and power factor correction"
          />
          <ListItem
            caption="Electrical Code"
            legend="Motor, Service, Voltage Drop Calculations; How to use the index in finding rules - a key skill to master in order to pass the C of Q"
          />
          <ListItem
            caption="PLC Programming"
            legend="A field growing in demand with the exponential rise in automation. Programming is a crucial skill moving forward."
          />
          <ListItem
            caption="Electronics"
            legend="From the diodes, transistors, resistors colour code and those tedious calculations"
          />
        </List>
    </div>
  );
}

Tutoring.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object.isRequried,
};

export default Tutoring;
