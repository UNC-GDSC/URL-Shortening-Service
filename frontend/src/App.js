import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShortenForm from './components/ShortenForm';
import UrlList from './components/UrlList';
import axios from 'axios';
import config from './config';

function App() {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const res = await axios.get(`${config.backendUrl}/api/urls`);
      setUrls(res.data);
    } catch (err) {
      console.error('Error fetching URLs', err);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleUrlCreated = (newUrl) => {
    setUrls([newUrl, ...urls]);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener Service
      </Typography>
      <ShortenForm onUrlCreated={handleUrlCreated} />
      <Box sx={{ mt: 4 }}>
        <UrlList urls={urls} />
      </Box>
    </Container>
  );
}

export default App;
