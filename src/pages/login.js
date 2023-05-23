import { generateRandomString } from "@/utils/spotify";
import { generateCodeChallenge } from "@/utils/spotify";

const url = process.env.NEXT_PUBLIC_URL;

if (!url) throw "must set url env var";

export default function Login() {
  return (
    <button
      onClick={() => {
        const clientId = process.env.NEXT_PUBLIC_client_id;

        const redirectUri = `${url}/callback`;

        let codeVerifier = generateRandomString(128);

        generateCodeChallenge(codeVerifier).then((codeChallenge) => {
          let state = generateRandomString(16);
          let scope =
            "user-top-read user-read-recently-played user-read-private";

          localStorage.setItem("code_verifier", codeVerifier);

          let args = new URLSearchParams({
            response_type: "code",
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: "S256",
            code_challenge: codeChallenge,
          });

          window.location = "https://accounts.spotify.com/authorize?" + args;
        });
      }}
    >
      Login
    </button>
  );
}
