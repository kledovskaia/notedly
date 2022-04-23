import { Box } from '@mui/material';
import { memo } from 'react';

const NoNotes = () => {
  return (
    <Box sx={{ padding: '1rem 0', gridColumn: '1 / -1', textAlign: 'center' }}>
      <h1>Here's no Notes yet</h1>
    </Box>
  );
};

export default memo(NoNotes);
