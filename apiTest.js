var spotifyApi = new SpotifyWebApi()

;(function () {
  let authToken = localStorage.getItem('auth')
  if (!authToken) return
  console.log(`Found auth token: ${authToken}`)
  spotifyApi.setAccessToken(authToken)
})()

async function doTestButton () {
  let resp = await spotifyApi.getUserPlaylists()
  console.log(resp)
  //   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
  //     if (err) console.error(err)
  //     else console.log('Artist albums', data)
  //   })
}
