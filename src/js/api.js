import axios from 'axios';

export async function fetchArtists(page = 1, limit = 12) {
  const url = `https://sound-wave.b.goit.study/api/artists?page=${page}&limit=${limit}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Помилка отримання артистів:', error);
    return null;
  }
}
