import refs from '../js/refs.js';

function scrollToTop(e) {
  if (pageYOffset > 50) {
    refs.btnTop.classList.remove('showBtn')
  }else{
    refs.btnTop.classList.add('shownBtn')
  }
};

export function clickBtn(e) {
  refs.form.scrollIntoView({behavior: "smooth"});
}

export default scrollToTop;
