const express = require('express');
const app = express();
const mediaRouter = require('./routes/media');
const mediaCached = require('./routes/mediaCached');
const port = process.env.SERVER_PORT || 3001 ;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api/media', mediaRouter);
app.use('/api/mediaCached', mediaCached);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
