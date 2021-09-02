import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = '23145866-da154062db79be09da281bc6e';
 
function getImages(query, page) {
    return axios.get(`?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY}`)
}

export default getImages;