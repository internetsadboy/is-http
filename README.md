## is-http

returns whether or not a url speaks http(s)

## example
```javascript
var isHttp = require('is-http')
isHttp('http://cookie.com') // true
isHttp('https://yahoo.com') // true
isHttp('blah://google.com') // false
```
