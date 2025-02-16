type Artist = {
    id: number;
    username: string;
    name: string;
    genre: string;
};

type Album ={
    id: number;
    name: string
}
  
 async function getArtistAPI(username:string) : Promise<Artist>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          username: username,
          name: "Taylor Swift",
          genre: "Pop"
        });
      }, 5000);
    });
  }
  
 async function getAlbumsAPI(username:string): Promise<Album[]>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 101, name: "album1" },
          { id: 102, name: "album2"}
        ]);
      }, 5000);
    });
  }

async function getArtist(username: string){
    const res = await getArtistAPI(username);
    return res;
}

async function getAlbums(username: string) {
    const res = await getAlbumsAPI(username)
    return res
}


export default async function Page({
    params,
  }: {
    params: Promise<{ username: string }>
  }) {

    const { username } = await params
    const artist = getArtist(username)
    const alb = getAlbums(username)
    const [artist1, alb1] = await Promise.all([artist, alb])
    return (
        <>
          <h1>{artist1.name}</h1>
          <h2>alb size: {alb1.length}</h2>
        </>
      )
}

