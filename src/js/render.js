const gallery = document.querySelector('.artists-grid');
const loadMore = document.querySelector('.load-more');
const modal = document.querySelector('.artist-modal');

export function renderArtists(list) {
  const html = list
    .map(
      artist => `
    <div class="artist-card" data-id="${artist.id}">
      <img src="${artist.imageUrl}" alt="${artist.name}">
      <h3>${artist.name}</h3>
      <p>${artist.genre}</p>
    </div>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', html);
}

export function clearArtists() {
  gallery.innerHTML = '';
}

export function showLoadMoreBtn(total, shown) {
  loadMore.style.display = shown < total ? 'block' : 'none';
}

export function openArtistModal(artist) {
  modal.querySelector('.modal-title').textContent = artist.name;
  modal.querySelector('.modal-img').src = artist.imageUrl;
  modal.querySelector('.modal-genre').textContent = artist.genre;
  modal.querySelector('.modal-bio').textContent = artist.bio;
  modal.classList.add('open');
}

export function closeModal() {
  modal.classList.remove('open');
}
