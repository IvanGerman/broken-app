const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');


app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

db.sync();
app.use(express.json());
//app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);

app.listen(4000, () => {
    console.log("App is listening on 4000");
});
