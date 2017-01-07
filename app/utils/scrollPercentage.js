function getDocHeight() {
  const D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}

function amountscrolled() {
  const D = document;
  const W = window;
  const winheight = W.innerHeight || (D.documentElement || D.body).clientHeight;
  const docheight = getDocHeight();
  const scrollTop = W.pageYOffset || (D.documentElement ||
    D.body.parentNode || D.body).scrollTop;
  const trackLength = docheight - winheight;
  // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  const pctScrolled = Math.floor(scrollTop / trackLength * 100);
  return pctScrolled;
}


export default function percentScrolled() {
  window.addEventListener('scroll', () => {
    const scrollAmount = amountscrolled();
    console.log(scrollAmount);
  }, false);
  return amountscrolled();
}
