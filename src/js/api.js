export async function fetchArtists(page = 1, limit = 12) {
  const url = `https://sound-wave.b.goit.study/api/artists?page=${page}&limit=${limit}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
