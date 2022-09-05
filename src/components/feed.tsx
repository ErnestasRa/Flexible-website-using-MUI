import { Box } from '@mui/material';
import React from 'react';

import Post from './post';

const Feed:React.FC = () => (
  <Box flex={4} p={2} gap="20px">
    <Post />
    <Post />
    <Post />
    <Post />
  </Box>
  );

export default Feed;
