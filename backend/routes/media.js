const express = require("express");
const fetch = require("node-fetch");
const config = require("config");
const router = express.Router();
const NodeCache = require("node-cache");
const cache = new NodeCache();

const endpoint = config.get("endpointConfig");

router.get("/all", (req, res) => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      res.send(data.media);
    })
    .catch((err) => res.send({ err }, { status: 500 }));
});

const makePage = (data, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const totalPages = Math.ceil(data.length / pageSize);
  const page = data.slice(startIndex, endIndex);
  return { totalPages: totalPages, page: page };
}

const filterAndPaginate = (data, req) => {
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
    });
  return makePage(filtered, req.query._page, req.query._limit);
}

router.get("/", (req, res) => {
  const cachedMedia = cache.get("media");
  if (cachedMedia) {
    return res.send(filterAndPaginate(cachedMedia, req));
  } else {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        cache.set("media", data);
        return res.send(filterAndPaginate(data, req));
      })
      .catch((err) => res.send({ err }, { status: 500 }));
  }
});

router.get("/years", (req, res) => {
  const cachedYears = cache.get("years");
  if (cachedYears) {
    return res.send(cachedYears);
  } else {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const years = [
          ...new Set(data.media.map((entry) => entry.year).sort()),
        ];
        cache.set("years", years);
        res.send(years);
      })
      .catch((err) => res.send({ err }, { status: 500 }));
  }
});

router.get("/genres", (req, res) => {
  const cachedGenres = cache.get("genres");
  if (cachedGenres) {
    return res.send(cachedGenres);
  } else {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const genres = [
          ...new Set(data.media.flatMap((entry) => entry.genre).sort()),
        ];
        cache.set("genres", genres);
        res.send(genres);
      })
      .catch((err) => res.send({ err }, { status: 500 }));
  }
});

module.exports = router;
