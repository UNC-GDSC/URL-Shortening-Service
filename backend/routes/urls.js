const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const Url = require('../models/Url');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

// POST /api/urls - Create a new shortened URL
router.post('/', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  // Validate URL format
  try {
    new URL(originalUrl);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    // Check if URL already exists
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json({
        originalUrl: url.originalUrl,
        shortUrl: `${BASE_URL}/${url.shortCode}`,
        shortCode: url.shortCode
      });
    } else {
      // Generate a unique short code and create new URL entry
      const shortCode = nanoid(7);
      url = new Url({ originalUrl, shortCode });
      await url.save();
      return res.status(201).json({
        originalUrl: url.originalUrl,
        shortUrl: `${BASE_URL}/${url.shortCode}`,
        shortCode: url.shortCode
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/urls - List all shortened URLs
router.get('/', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    const response = urls.map(url => ({
      originalUrl: url.originalUrl,
      shortUrl: `${BASE_URL}/${url.shortCode}`,
      shortCode: url.shortCode,
      createdAt: url.createdAt
    }));
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
