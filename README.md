# APIS

* Client-facing 
    * https://github.com/jmperez/spotify-web-api-js
    * https://github.com/thelinmichael/spotify-web-api-node

# Spotify API

Client ID: `--client--id--`
Auth Flow: `Implicit Grant`

-> FIXME: Probably have to use Authorization Code With PKCE
-> Token expiry is 3600 seconds (1 hour)

## Auth

### Endpoint

https://accounts.spotify.com/authorize

### Query Parameters

client_id=...
response_type=token
redirect_uri=...
scopes=scopes separated by a space

### Response

access_token
token_type
expires_in

## Scopes

### Playlist Management

* `ugc-image-upload` - Custom playlist cover images
* `playlist-modify-public`
* `playlist-read-private`
* `playlist-modify-private`

* `user-library-modify`
* `user-library-read`

### Stats

* `user-top-read`
* `playlist-read-collaborative`
* `user-follow-read`