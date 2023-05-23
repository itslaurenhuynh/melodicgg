import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setLoading] = useState(false);

  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access_token");
    useEffect(() => {
      setLoading(true);
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((res) => res.json())
        .then((profile) => {
          setProfile(profile);
          setLoading(false);
        });
    }, []);
    if (isLoading) return <p>Loading...</p>;
    if (!profile) return <p>No profile data</p>;
  }

  return (
    <div className="flex flex-row flex-nowrap bg-main-blue rounded-2xl self-start">
      <div className="p-2">
        <img className="rounded-full h-24" src="/pic.jpg" />
      </div>
      <div className="p-3 pr-4">
        <p id="displayName">{profile.display_name}</p>
        <p>{profile.followers.total} followers</p>
      </div>
    </div>
  );
}
