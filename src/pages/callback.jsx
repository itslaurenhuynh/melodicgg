import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Call() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");

    if (typeof window === "undefined") return;
    let codeVerifier = localStorage.getItem("code_verifier");
    const url = process.env.NEXT_PUBLIC_URL;
    const redirectUri = `${url}/callback`;

    let body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: process.env.NEXT_PUBLIC_client_id,
      code_verifier: codeVerifier,
    });

    const response = fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const useUser = () => ({ user: null, loading: false });
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/home");
    }
  }, [user, loading]);

  return <p>Redirecting...</p>;
}
