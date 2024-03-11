const express = require('express');
const fetch = require('node-fetch');
const config = require('config');
const router = express.Router();

const endpoint = config.get('endpointConfig');

router.get('/all', (req, res) => {
  try {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        res.send(data.media);
      }).catch(err=>res.send({err},{status: 500} ))
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

router.get('/', (req, res) => {
  try {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (req.query.year || req.query.type || req.query.genre) {
          const filteredMedia = data.media.filter((item) =>
          (item.year === req.query.year) ||
          (item.type === req.query.type) ||
          (item.genre.includes(req.query.genre))
        )
        return res.send(filteredMedia);
        } else {
          return res.send(data.media);
        }
      }).catch(err=>res.send({err},{status: 500} ))
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
