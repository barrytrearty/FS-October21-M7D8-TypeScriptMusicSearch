interface Album {
  id: number;
  cover_medium: string;
  title: string;
}

interface Artist {
  id: number;
  name: string;
}

interface Song {
  // id: number;
  album: Album;
  artist: Artist;
}

export default Song;
