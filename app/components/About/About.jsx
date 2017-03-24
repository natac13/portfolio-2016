import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { Element } from 'react-scroll';
import { Button } from 'react-toolbox/lib/button';

import Separator from '../Separator/';

import style from './style.scss';

function About(props) {
  const { revealMoreAbout, actions } = props;
  console.log(props);

  const moreClass = classnames({
    [style.more]: true,
    [style.slideDown]: true, // override
  });

  return (
    <div className={style.wrapper} id="about" name="about">
      <Element name="about" />
      <header className={style.header}>
        <h1 className={style.title}>About Me</h1>
      </header>
      <Separator />
      <p className={style.intro}>
        {`My name is Sean Campbell. For the last few years I have been continually
        making - what I see as - improvements in my life. Waking up one day realizing
        that I only have this one shot at life. Ever since then I have been
        compeled to make the alterations to my day to day lifestyle and mindset;
        with the underlining permiss of redefining what success and happiness mean to me.`}
      </p>
      <section className={moreClass}>
        <div className={style.listAndPicture}>
          <div className={style.changesSection}>
            <h3 className={style.changesTitle}>Changes</h3>
            <ul className={style.changesList}>
              <li className={style.changeItem}>Read daily!</li>
              <li className={style.changeItem}>Exercising daily</li>
              <li className={style.changeItem}>Adopting a plant-based diet</li>
              <li className={style.changeItem}>Meditate</li>
              <li className={style.changeItem}>Finding happiness with less</li>
              <li className={style.changeItem}>Quitting alcohol and smoking.</li>
              <li className={style.changeItem}>Dropping TV</li>
              <li className={style.changeItem}>Losing over 70lbs.</li>
            </ul>
          </div>
          <img
            className={style.thumbUpPic}
            src={require('./thumbs-up-me.jpg')}
            alt="Sean Campbell giving thumbs up"
          />
        </div>
        <p className={style.work}>
          {`I make a living working as an electrical apprentice in the Internation
            Brotherhood of Electrical Workers, or the IBEW. Being in London, Ontario
            make local is 120. Coming to the culmination of my apprenticeship through
            the Union I have been giving the opportunity to work on vaious types of
            construction projects; ranging from: solar and wind farms, to industrial
            automotive plants, to commercial buildings.`}</p>
        <p className={style.spareTime}>
          {`During my spare time and time off from working construction, I have found
            an enjoyment out of teaching myself other skills that could prove advantagous
            to me one day. One being web and application development using JavsScript
            nodejs React and much more. A skill which enabled me to build this
            website and various projects. Recently after completing
            my trade school and being exposed to PLC programming I have started to invest
            sometime in venturing into that area. I have taking 2 courses beside the
            intro from trade school as well as built my own PLC trainer.`}
        </p>
      </section>
{/*      <Button
        className={style.seeMore}
        label={revealMoreAbout ? 'Close' : 'See More'}
        flat
        onClick={actions.toggleMoreAbout}
        primary
      />*/}
    </div>
  );
}

About.propTypes = {
  actions: PropTypes.object.isRequired,
  revealMoreAbout: PropTypes.bool.isRequired,
};

export default About;
