import refs from '../js/refs.js';
import { state } from '../index.js';
import { getImages } from '../index.js';
import cardImages from '../template/card-img.hbs';

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

async function btnLoad(e) {
    state.page += 1;
    const { data: { hits } } = await getImages(state.query, state.page);
    const markup = cardImages(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
if (state.page === 2) {
    const observer = new IntersectionObserver(btnLoad, options);
    observer.observe(refs.loadMore)
    
    }
}

export default btnLoad;