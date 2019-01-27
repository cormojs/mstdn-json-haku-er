const Mastodon = require('mastodon-api')

const config = {
  "access_token": "hogehoge",
  "api_url": "https://hogehoge.jp/api/v1/"
}

const mastodon = new Mastodon(config)

const listener = mastodon.stream('streaming/user')

listener.on('message', msg => console.log(msg.data))