import './sass/main.scss';
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import cardImages from './template/card-img.hbs';
import refs from './js/refs.js';
import getImages from './js/apiService.js';
import debounce from 'lodash/debounce';
import onImgClick from './js/open-img.js';
import btnLoad from './js/load-more.js';
import scrollToTop from './js/scroll-up.js';
import { clickBtn } from './js/scroll-up.js';


export const state = {
    page: 1,
    query: "",
};

window.addEventListener('scroll', debounce(scrollToTop, 200));
refs.form.addEventListener('submit', onSearch);
refs.btnTop.addEventListener('click',clickBtn)
refs.gallery.addEventListener('click', onImgClick);
refs.loadMore.addEventListener('click', btnLoad);
refs.loadMore.style.visibility = 'hidden';


async function onSearch(e) {
    e.preventDefault();
    refs.loadMore.style.visibility = 'hidden';
    state.query = e.currentTarget.elements.query.value;
    state.page = 1;
  
    const { data: { hits } } = await getImages(state.query, state.page);
    
    if (hits.length === 0) {
        return error({
            text: "Images not found. Please enter a more specific query!",
        });
    }
    
    if (hits.length > 11) {
        refs.loadMore.style.visibility = 'visible';
    };

    const markup = cardImages(hits);
    refs.gallery.innerHTML = markup;   
}

export { getImages };
