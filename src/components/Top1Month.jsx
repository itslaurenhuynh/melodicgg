import { useState, useEffect } from "react";

export default function Top1Month() {
  const [artist, setArtist] = useState(null);
  const [track, setTrack] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("access_token");

    Promise.all([
      fetch(
        "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=1",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      ),
      fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      ),
    ])
      .then(([resArtists, resTracks]) =>
        Promise.all([resArtists.json(), resTracks.json()])
      )
      .then(([artist, track]) => {
        setArtist(artist);
        setTrack(track);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!artist || !track) return <p>No profile data</p>;
  var artistSongs = [];
  for (var i = 0; i < track.items.length; i++) {
    for (var j = 0; j < track.items[i].artists.length; j++)
      if (track.items[i].artists[j].name === artist.items[0].name) {
        artistSongs.push(track.items[i].name);
      }
  }

  return (
    <div className="flex flex-col bg-main-blue row-start-3 row-end-4 rounded-2xl">
      <div className="">
        <p className="flex justify-center">Top Artist - 1 Month</p>
      </div>
      <div className="flex flex-row">
        <div className="p-3 pt-0">
          <img
            className="rounded-full h-24 w-24 object-cover"
            src={artist.items[0].images[0].url}
          />
        </div>
        <div className="flex flex-col justify-center pb-2 pr-2">
          <h3>{artist.items[0].name}</h3>
          <p>{artistSongs[0]}</p>
        </div>
      </div>
    </div>
  );
}
