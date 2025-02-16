import { Suspense } from "react"
type Artist = {
  id: number;
  username: string;
  name: string;
  genre: string;
};

type Playlist = {
  id: number;
  name: string;
  songs: number
}

async function getArtist(username: string): Promise<Artist> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        username: username,
        name: "Taylor Swift",
        genre: "Pop"
      });
    }, 500);
  });
}

async function getArtistPlaylists(id: number): Promise<Playlist[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, name: "Top Hits", songs: 20 },
        { id: 102, name: "Love Songs", songs: 15 }
      ]);
    }, 500);
  });
}


export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {

  const { username } = await params
  const artist = await getArtist(username)
  return (<>
    <h1>{artist.name}</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Playlists artistID={artist.id} />
    </Suspense>
  </>
  )
}

async function Playlists({ artistID }: { artistID: number }) {
  const playlists = await getArtistPlaylists(artistID)

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  )
}