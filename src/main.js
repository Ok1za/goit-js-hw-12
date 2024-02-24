import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    const formElem = document.querySelector('.search-form');
    const galleryEl = document.querySelector('#gallery-o');
    const loaderElem = document.querySelector('.loader');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const loadMoreLoader = document.querySelector('.load-more-loader');
    const endOfCollectionMsg = document.querySelector('.end-of-collection');

    hideLoader();

    const lightbox = new SimpleLightbox('.gallery-o a', {
        captionDelay: 250,
    });

    formElem.addEventListener('submit', onSubmit);

    let currentPage = 1;
    let currentSearch = '';

    async function onSubmit(e) {
        e.preventDefault();
        showLoader();
        currentPage = 1;
        currentSearch = formElem.querySelector('.input-search').value;

        try {
            const data = await getPhotoBySearch(currentSearch, currentPage);
            renderImages(data.hits);
            currentPage++;
        } catch (error) {
            renderError(error);
        } finally {
            hideLoader();
        }
    }

    async function getPhotoBySearch(searchValue, page) {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '42296578-21d0e9ca438ad812aa67579cd';
        const Query = `?key=${KEY}&q=${searchValue}&page=${page}`;
        const params = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=15';
        const url = BASE_URL + Query + params;
        
        try {
            const response = await axios.get(url);
            const data = response.data;
        
        if (!data || data.total === 0 || !data.hits || data.hits.length === 0) {
            throw new Error('No images found');
        }

        const totalPages = Math.ceil(data.totalHits / 15);
        if (page >= totalPages) {
            hideLoadMoreButton();
            showEndOfCollectionMessage();
        } else {
            showLoadMoreButton();
            hideEndOfCollectionMessage();
        }

        return data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
}

    function hideLoadMoreButton() {
    loadMoreBtn.hidden = true;
}

function showLoadMoreButton() {
    loadMoreBtn.hidden = false;
}

function showEndOfCollectionMessage() {
    endOfCollectionMsg.style.display = 'block';
}

function hideEndOfCollectionMessage() {
    endOfCollectionMsg.style.display = 'none';
}

    
    function renderImages(array) {
    const markup = array
        .map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => {
            return `
        <div class="gallery">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="400" height="240" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${likes}</span></li>
                <li class="info-cards-elements">views<span>${views}</span></li>
                <li class="info-cards-elements">comments<span>${comments}</span></li>
                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
            </ul>
            </a>
        </div>
        `;
        }
        )
        .join('');

    galleryEl.innerHTML = markup;
    lightbox.refresh();
    if (array.length < 15) {
        hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
    }

    function renderError(error) {
    galleryEl.innerHTML = '';
    iziToast.show({
        message: `❌ "${error.message}". Please try again!`,
        color: 'red',
        position: 'topRight',
        maxWidth: '400px',
    });
    }

    function showLoader() {
    loaderElem.style.display = 'block';
    }

    function hideLoader() {
    loaderElem.style.display = 'none';
    }

    function showLoadMoreButton() {
        toggleLoadMoreButtonVisibility(true);
    }

    loadMoreBtn.addEventListener('click', async () => {
        showLoadMoreLoader();

    try {
        const data = await getPhotoBySearch(currentSearch, currentPage);
        
        if (data.totalHits === 0) {
            hideLoadMoreButton();
            showEndOfCollectionMessage();
        } else {
            appendImages(data.hits);
        }
    } catch (error) {
        renderError(error);
    } finally {
        currentPage++;
        hideLoadMoreLoader();
    }
});

    function appendImages(array) {
        const markup = array
            .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
                return `
                    <div class="gallery">
                        <a href="${largeImageURL}">
                            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="380" height="220" />
                            <ul class="info-cards-container">
                                <li class="info-cards-elements">likes<span>${likes}</span></li>
                                <li class="info-cards-elements">views<span>${views}</span></li>
                                <li class="info-cards-elements">comments<span>${comments}</span></li>
                                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
                            </ul>
                        </a>
                    </div>
                `;
            })
            .join('');

        galleryEl.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();

        hideLoadMoreLoader();
    }

    function toggleLoadMoreButtonVisibility(show) {
        loadMoreBtn.hidden = !show;
    }

    function showLoadMoreLoader() {
        toggleLoadMoreLoaderVisibility(true);
    }

    function hideLoadMoreLoader() {
        toggleLoadMoreLoaderVisibility(false);
    }

    function toggleLoadMoreLoaderVisibility(show) {
        loadMoreLoader.style.display = show ? 'block' : 'none';
    }

    function showEndOfCollectionMessage() {
        endOfCollectionMsg.style.display = 'block';
    }

    function hideEndOfCollectionMessage() {
        endOfCollectionMsg.style.display = 'none';
    }
});
