import * as basicLightbox from 'basiclightbox';

function onImgClick(e) {
    if (e.target.nodeName != 'IMG') {
        return;
    }
    const currentImg = e.target.dataset.src;
    const instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">`)

instance.show()
}
export default onImgClick;