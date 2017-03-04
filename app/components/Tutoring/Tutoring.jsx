import React, { PropTypes } from 'react';

import { List, ListItem } from 'react-toolbox/lib/list';

import AltHeader from '../AltHeader/';
import Separator from '../Separator/';
import ContactForm from '../ContactForm/';
import Button from '../Button/';

import Statement from './Statement/';

import dataList from './assets/statements.json';

import style from './style.scss';

function Tutoring(props) {
  const { actions, display } = props;

  const statementComponents = dataList.map((item) => (
    <Statement
      title={item.title}
      statements={item.statements}
      className={item.title === 'Price?' ? style.price : null}
    />
  ));
  return (
    <div className={style.wrapper}>
      <AltHeader pathname="Tutoring Service" />
      <div className={style.catch}>
        <p>Are you an Electrical Apprentice struggling through trade school</p>
        <p>Need help with RLC ciruits, Motor Calculations, Electrical Code</p>
      </div>

      <section className={style.content}>
        {statementComponents}

        <List className={style.subjects}>
            <h3 className={style.subTitle}>Subjects I Cover</h3>
            <Separator />
            <ListItem
              className={style.subject}
              caption="Electrical Theory"
              legend="Electromagnetism, AC/DC, Motors, Generators, Transformers."
            />
            <ListItem
              className={style.subject}
              caption="RLC Circuit Analysis"
              legend="From purely resistive circuits to full RLC circuits an
                power factor correction."
            />
            <ListItem
              className={style.subject}
              caption="Electrical Code"
              legend="Motor, Service, Voltage Drop Calculations; How to use the
                index."
            />
            <ListItem
              className={style.subject}
              caption="PLC Programming"
              legend="Growing in demand with the exponential rise in
                automation. A crucial skill moving forward."
            />
            <ListItem
              className={style.subject}
              caption="Electronics"
              legend="From the diodes, transistors, resistors colour code and
                those tedious calculations."
            />
          </List>
        </section>
      <ContactForm actions={actions} display={display} />
      {/*<Button
        label="Contact Me"
        hoverStyle="fallDown"
        href={`mailto:sean.campbell13@gmail.com?subject=Tutoring%20Interest`}
      />*/}
    </div>
  );
}

Tutoring.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object.isRequried,
};

export default Tutoring;
