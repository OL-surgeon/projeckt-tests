export async function fetchArtists(page = 1, limit = 12) {
  const res = await fetch(
    `https://sound-wave.b.goit.study/api/artists?page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error('API Error');
  return res.json(); // { data: [...], total, page, limit }
}

export async function fetchArtistById(id) {
  const res = await fetch(`https://sound-wave.b.goit.study/api/artists/${id}`);
  if (!res.ok) throw new Error('API Error');
  return res.json(); // { data: { ...artist fields } }
}
