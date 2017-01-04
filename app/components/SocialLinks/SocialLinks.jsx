import React, { PropTypes } from 'react';
import style from './style.scss';

import { Button } from 'react-toolbox/lib/button';
// import { Button, IconButton } from 'react-toolbox/lib/button';
import tooltip from 'react-toolbox/lib/tooltip';
import { Icon } from 'react-fa';

const TooltipButton = tooltip(Button);
// const TooltipIconButton = tooltip(IconButton);
const TOOLTIP_DELAY = 1050;

function SocialLinks(props) {

  return (
    <section className={style.nav}>
      <TooltipButton
        className={style.socialLink}
        label="LinkedIn"
        flat
        href="https://ca.linkedin.com/in/seancampbellnatac"
        icon={<Icon name="linkedin" />}
        neutral={false}
        tooltip="LinkedIn Account"
        tooltipDelay={TOOLTIP_DELAY}
      />
      <TooltipButton
        className={style.socialLink}
        label="Github"
        flat
        href="http://github.com/natac13"
        icon={<Icon name="github" />}
        neutral={false}
        tooltip="Github Account"
        tooltipDelay={TOOLTIP_DELAY}
      />
      <TooltipButton
        className={style.socialLink}
        label="Twitter"
        flat
        href="https://twitter.com/natac1311"
        icon={<Icon name="twitter" />}
        neutral={false}
        tooltip="Twitter Account"
        tooltipDelay={TOOLTIP_DELAY}
      />
    </section>
  );
}

SocialLinks.propTypes = {

};

export default SocialLinks;
