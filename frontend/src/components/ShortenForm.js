import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography } from '@mui/material';
import config from '../config';

const ShortenForm = ({ onUrlCreated }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!originalUrl) {
      setError('Please enter a URL');
      return;
    }
    try {
      const res = await axios.post(`${config.backendUrl}/api/urls`, { originalUrl });
      onUrlCreated(res.data);
      setOriginalUrl('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to shorten URL');
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        label="Enter URL"
        variant="outlined"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Shorten
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default ShortenForm;
