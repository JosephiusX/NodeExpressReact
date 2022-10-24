// keys.js
if (process.env.NODE_ENV === 'production') {
    // we are in production
    module.exports = require('./prod')
} else {
    // we are in developemint
    module.exports = require('./dev');
}

  // emaily-prod
// ug6ZXMMY1GJAlYUB
// mongodb+srv://emaily-prod:ug6ZXMMY1GJAlYUB@cluster0.qgtl2av.mongodb.net/?retryWrites=true&w=majority
  // Google Auth Creds
// 407598114670-4j2tri1chc37ml35qg4v432587fft6gd.apps.googleusercontent.com
// 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
  // Ports: https://stormy-lake-15654.herokuapp.com
  // https://stormy-lake-15654.herokuapp.com/auth/google/callback

    // emaily-dev
// rqP599qdjsWebadS
// mongodb+srv://emaily-dev:rqP599qdjsWebadS@cluster0.ysld0w2.mongodb.net/?retryWrites=true&w=majority
   // Google Auth Creds
// 681469964951-k7oijtioiq1tmvg9ck5metsvah8ipqnm.apps.googleusercontent.com
// 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
  // Ports: https://localhost:5000
  // auth redirect URI : http://localhost:5000/auth/google/callback

