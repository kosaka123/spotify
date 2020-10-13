// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "c98728bbe60c4723852bf589619301b7";

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=Ong
      var parts = item.split("=");
      initial[parts[0] /* accessToken*/] = decodeURIComponent(
        parts[1] /*mysupersecretkey */,
      );

      return initial;
    }, {});
};

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20",
)}&response_type=token&show_dialog=true`;
