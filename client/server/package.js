{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "engines": {
    "node": "14.x"
  },
  "scripts": {
    "start": "node server.js",
    "heroku-postbuild": "cd client && npm install && npm run build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.2",
    "nodemon": "^2.0.16",
    "path": "^0.12.7"
  }
}
