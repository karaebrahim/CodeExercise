const express = require('express');
const fetch = require('node-fetch');
const NodeCache = require('node-cache');
const config = require('config');
const router = express.Router();
const cache = new NodeCache();

const cachedData = cache.get('media');
const endpoint = config.get('endpointConfig');

//http://localhost:3001/api/mediaCached/all
router.get('/all', (req, res) => {
  if (cachedData) {
    return res.send(cachedData);
  } else {
    fetch(endpoint)
			.then((res) => res.json())
			.then((data) => {
				cache.set('media', data, 5);
				res.send(data);
			});
  }
});

//http://localhost:3001/api/mediaCached?page=2
router.get('/', (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  if (cachedData) {
    return res.send(makePage(cachedData, pageNumber, pageSize));
  } else {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        cache.set('media', data, 5);
        return res.send(makePage(data, pageNumber, pageSize));
      });
  }
});

const makePage = (data, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const totalPages = Math.ceil(data.length / pageSize);
  const dataArray = Array.from(data);
  const page = dataArray.slice(startIndex, endIndex);
  return { totalPages: totalPages, page: page };
}

module.exports = router;
