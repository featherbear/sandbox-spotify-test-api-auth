let scopes = [
  'ugc-image-upload',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read'
]
const client_id = '60a2194c20c04d64b0d1d6f7913e791e'

// TODO: Router?
//   redirectUri:
//   clientId:

// FIXME: document.location ... [//] #authoriseCallback
function doAuth () {
  window.location = `https://accounts.spotify.com:443/authorize?client_id=${client_id}&response_type=token&redirect_uri=${encodeURIComponent(
    document.location.origin + '/#authoriseCallback'
  )}&scopes=${encodeURIComponent(scopes.join(' '))}`
}

window.addEventListener('load', function () {
  const searchStr = document.location.hash.slice(1)
  if (!searchStr) return

  let items = searchStr.split('&').reduce((obj, pairStr) => {
    const [key, val] = pairStr.split('=')
    return { ...obj, [key]: val }
  }, {})

  console.log(items)
  if (Object.keys(items).length) {
    console.log(items)
    console.info(`Received auth token: ${items['access_token']}`)

    localStorage.setItem(
      'token_expiry',
      new Date().getTime() + Number(items['expires_in']) * 1000
    )
    localStorage.setItem('auth', items['access_token'])
    location = location.origin
  }
})
