import { Fragment } from 'react';
import {
  Typography,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function Review() {
  return (
    <Fragment>
      <Grid container spacing={3} columnSpacing={9}>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">
            How many meals do you eat per day?
          </Typography>
          <TextField
            required
            id="meals"
            name="meals"
            label="Meals quantity"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
          <Typography variant="subtitle2" sx={{ mt: 4 }}>
            What is the frequency ?
          </Typography>
          <TextField
            required
            id="meals"
            name="meals"
            label="Meals frequency"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">
            What foods do you typically eat every day ?
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Vegetables" />
            <FormControlLabel
              control={<Checkbox />}
              label="Legumes and beans"
            />
            <FormControlLabel control={<Checkbox />} label="Eggs" />
            <FormControlLabel control={<Checkbox />} label="Meat" />
          </FormGroup>
        </Grid>
      </Grid>
    </Fragment>
  );
}
