import { useState, useEffect } from "react";

export default function Top10AllTime() {
  const [artist, setArtist] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("access_token");
    fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((res) => res.json())
      .then((artist) => {
        setArtist(artist);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!artist) return <p>No profile data</p>;

  return (
    <div className="flex flex-col row-start-4 bg-main-blue px-2.5 pb-2.5 space-y-1.5 rounded-2xl">
      <div className="flex justify-center">
        <p>Top 10 All Time</p>
      </div>
      {artist.items.map((artists) => (
        <div className="flex flex-row bg-box-blue rounded-2xl p-1">
          <div className="p-1">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src={artists.images[0].url}
            />
          </div>
          <div className="flex flex-auto items-center p-2">
            <p>{artists.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
