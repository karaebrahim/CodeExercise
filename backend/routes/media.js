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

// Filtered data by year, type, genre
router.get('/', (req, res) => {
  try {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.media
          .filter((item) => {
            if (req.query.year && item.year !== req.query.year) return;
            return item;
          })
          .filter((item) => {
            if (req.query.type && item.type !== req.query.type) return;
            return item;
          })
          .filter((item) => {
            if (req.query.genre && !item.genre.includes(req.query.genre)) return;
            return item;
          })
        return res.send(filtered);
      }).catch(err=>res.send({err},{status: 500} ))
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

router.get('/years', (req, res) => {
  try {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const years = data.media.map((entry) => entry.year).sort();
        res.send([...new Set(years)]);
      }).catch(err=>res.send({err},{status: 500} ))
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

router.get('/genres', (req, res) => {
  try {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const genres = data.media.flatMap((entry) => entry.genre).sort();
        res.send([...new Set(genres)]);
      }).catch(err=>res.send({err},{status: 500} ))
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
