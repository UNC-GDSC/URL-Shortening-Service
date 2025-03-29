import React from 'react';
import { Box, List, ListItem, ListItemText, Link, Divider } from '@mui/material';

const UrlList = ({ urls }) => {
  if (!urls.length) {
    return <Box>No URLs shortened yet.</Box>;
  }
  return (
    <List>
      {urls.map((url) => (
        <React.Fragment key={url.shortCode}>
          <ListItem>
            <ListItemText
              primary={
                <Link href={url.shortUrl} target="_blank" rel="noopener">
                  {url.shortUrl}
                </Link>
              }
              secondary={url.originalUrl}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default UrlList;
