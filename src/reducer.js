export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //Remove after finished developing
  //token:
  //"BQC1_V_Fqi2TkbP2La12lwpVlGi6UOaLnVZBj3kVAbtpEBqOzfizFBzo9SiFKIVNmevUjYmnxkZmeGb73EWURe_o70qDsgH7avKnWGKoTQSngFQeG75iUd5nUfGcZBDrKob5mROPlXkQrA4pTpPvqPEqfkd6EMkpTivDbBKAnxC1UuoN3sas",
};

const reducer = (state, action) => {
  console.log("this is action:", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
