import { fetchArtists, fetchArtistById } from './js/api.js';
import {
  renderArtists,
  clearArtists,
  showLoadMoreBtn,
  openArtistModal,
  closeModal,
} from './js/render.js';

let page = 1,
  total = 0,
  shown = 0;

async function loadArtists(reset = false) {
  try {
    const res = await fetchArtists(page);
    total = res.total;
    reset ? clearArtists() : null;
    renderArtists(res.data);
    shown += res.data.length;
    showLoadMoreBtn(total, shown);
  } catch (e) {
    alert('Error loading artists');
  }
}

document.querySelector('.load-more').addEventListener('click', () => {
  page++;
  loadArtists();
});

document.querySelector('.artists-grid').addEventListener('click', async e => {
  const card = e.target.closest('.artist-card');
  if (!card) return;
  const artist = await fetchArtistById(card.dataset.id);
  openArtistModal(artist);
});

document.querySelector('.modal-close').addEventListener('click', closeModal);

// Initial render
loadArtists(true);
