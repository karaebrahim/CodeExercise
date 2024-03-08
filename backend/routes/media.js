const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  try {
    fetch('https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data.json')
      .then((res) => res.json())
      .then((data) => {
        res.send(data);
      })
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
