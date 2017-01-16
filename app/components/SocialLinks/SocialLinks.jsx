import React, { PropTypes } from 'react';
import style from './style.scss';

import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
// import { Button, IconButton } from 'react-toolbox/lib/button';
import tooltip from 'react-toolbox/lib/tooltip';
import { Icon } from 'react-fa';

const TooltipButton = tooltip(Button);
// const TooltipIconButton = tooltip(IconButton);
const TOOLTIP_DELAY = 1050;

function SocialLinks(props) {
  const wrapperClass = classnames({
    [style.nav]: true,
    [props.className]: !!props.className,
  });

  return (
    <section className={wrapperClass}>
      <TooltipButton
        className={style.socialLink}
        data-hover="LinkedIn"
        icon={<Icon className={style.icon} name="linkedin" />}
        flat
        href="https://ca.linkedin.com/in/seancampbellnatac"
        neutral={false}
        tooltip="LinkedIn Account"
        tooltipDelay={TOOLTIP_DELAY}
        children={<span className={style.span}>LinkedIn</span>}
      />
      <TooltipButton
        className={style.socialLink}
        data-hover="Github"
        icon={<Icon className={style.icon} name="github" />}
        flat
        href="http://github.com/natac13"
        neutral={false}
        tooltip="Github Account"
        tooltipDelay={TOOLTIP_DELAY}
        children={<span className={style.span}>Github</span>}
      />
      <TooltipButton
        className={style.socialLink}
        data-hover="Twitter"
        icon={<Icon className={style.icon} name="twitter" />}
        flat
        href="https://twitter.com/natac1311"
        neutral={false}
        tooltip="Twitter Account"
        tooltipDelay={TOOLTIP_DELAY}
        children={<span className={style.span}>Twitter</span>}
      />
    </section>
  );
}

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;
