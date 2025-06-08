export function createArtistCard(artist) {
  return `
    <li class="artist-card">
      <img src="${artist.image}" alt="${artist.name}" class="artist-image" />
      <h3 class="artist-name">${artist.name}</h3>
      <p class="artist-genre">${artist.genre}</p>
    </li>
  `;
}
