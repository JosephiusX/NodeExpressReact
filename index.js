// common js module
const express = require('express');
require('./services/passport'); // if nothings being returned, we can just require it

const app = express();

// require auth routes function from that file, and immidietly call with the app object
require('./routes/authRoutes')(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT); 

