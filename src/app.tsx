import { Box, Stack } from '@mui/material';
import * as React from 'react';
import Feed from './components/feed';
import NavBar from './components/nav-bar';
import RightBar from './components/right-bar';
import Sidebar from './components/side-bar';

const App: React.FC = () => (
  <Box>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <RightBar />
    </Stack>
  </Box>

);

export default App;
