import { animateScroll as scroll, scroller } from 'react-scroll';

const scrollOption = {
  duration: 700,
  delay: 400,
  smooth: true,
  offset: 0,
  isDynamic: true,
};

export function scrollTo(dest) {
  return scroller.scrollTo(dest, scrollOption);
}

export function scrollTop() {
  return scroll.scrollToTop(scrollOption);
}
