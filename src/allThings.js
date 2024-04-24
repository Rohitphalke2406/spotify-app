export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirecturi = "http://localhost:3000/";
const clientId = "1bc75e25986b4ec4958fc6630572ee58"

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modified-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {

        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    } , {});
}

export const loginurl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scopes=${scope.join("%20")}&response_type=token&show_dialog=true`;