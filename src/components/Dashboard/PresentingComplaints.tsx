import * as React from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material';

export default function PresentingComplaints() {
  return (
    <React.Fragment>
      <TextField
        id="search"
        label="Search for sign or symptom"
        fullWidth
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      <Typography variant="subtitle2">No symptomps added</Typography>
      <Typography variant="body2">
        Tap on the search box above, or choose from the list below to get
        started
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2, gap: 1 }}
      >
        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
          Fever
        </Button>
        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
          Cough
        </Button>
        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
          Dyspnoea
        </Button>
        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
          Skin-Rash
        </Button>
        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
          Vomiting
        </Button>
      </Box>
    </React.Fragment>
  );
}
