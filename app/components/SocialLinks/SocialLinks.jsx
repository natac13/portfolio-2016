import React, { PropTypes } from 'react';
import style from './style.scss';

import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
// import { Button, IconButton } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';


function SocialLinks(props) {
  const wrapperClass = classnames({
    [style.nav]: true,
    [props.className]: !!props.className,
  });

  return (
    <section className={wrapperClass}>
      <Button
        className={style.socialLink}
        data-hover="LinkedIn"
        icon={<Icon className={style.icon} name="linkedin" />}
        flat
        href="https://ca.linkedin.com/in/seancampbellnatac"
        neutral={false}
        children={<span className={style.span}>LinkedIn</span>}
      />
      <Button
        className={style.socialLink}
        data-hover="Github"
        icon={<Icon className={style.icon} name="github" />}
        flat
        href="http://github.com/natac13"
        neutral={false}
        children={<span className={style.span}>Github</span>}
      />
      <Button
        className={style.socialLink}
        data-hover="Twitter"
        icon={<Icon className={style.icon} name="twitter" />}
        flat
        href="https://twitter.com/natac1311"
        neutral={false}
        children={<span className={style.span}>Twitter</span>}
      />
    </section>
  );
}

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;
