import { useState, useEffect } from "react";

export default function RecentSongs() {
  const [songs, setSongs] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("access_token");
    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=15", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!songs) return <p>No profile data</p>;

  const maps = songs.items.map((s) => {
    var date = new Date(s.played_at);
    s.played_at =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

    const time = date.toLocaleTimeString("en-US");
    let minutes = Math.floor(s.track.duration_ms / 60000);
    let seconds = ((s.track.duration_ms % 60000) / 1000).toFixed(0);
    s.track.duration_ms = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    return time;
  });

  console.log(maps);
  return (
    <div className="flex flex-col w-auto row-start-2 row-end-6 bg-main-blue rounded-2xl p-1 px-2.5 pb-2.5 space-y-1.5">
      <div className="pl-3 pt-1">
        <p>Recently Played Songs</p>
      </div>
      {songs.items.map((song) => (
        <div className="grid grid-cols-[15%_20%_45%_20%] bg-box-blue rounded-2xl p-2">
          <div className="flex flex-col items-center justify-center">
            <p>{song.played_at}</p>
            {/* <p>{maps}</p> */}
          </div>
          <div className="flex justify-center">
            <img className="h-20" src={song.track.album.images[0].url} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="truncate">{song.track.name}</p>
            <p>{song.track.artists.map((names) => names.name).join(", ")}</p>
            <p className="truncate">{song.track.album.name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p>{song.track.duration_ms}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
