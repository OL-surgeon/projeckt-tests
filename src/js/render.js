export function createArtistCard(artist) {
  if (!artist || !artist.image || !artist.name || !artist.genre) {
    return ''; // Повертає порожній рядок, якщо дані некоректні
  }

  return `
        <li class="artist-card">
            <img src="${artist.image}" alt="${artist.name}" class="artist-image" />
            <h3 class="artist-name">${artist.name}</h3>
            <p class="artist-genre">${artist.genre}</p>
        </li>
    `;
}
