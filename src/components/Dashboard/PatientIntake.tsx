import * as React from 'react';
import Grid from '@mui/material/Grid';
import {
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  RadioGroup,
  Radio,
  MenuItem,
} from '@mui/material';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">Patient name</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">Age</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="years"
            name="years"
            label="Years"
            fullWidth
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="months"
            name="months"
            label="Months"
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">Sex</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">
            Select any allergies the patient has
          </Typography>
          <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select Allergies
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <Typography variant="subtitle2">
            Select any chronic illnesses
          </Typography>
          <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select Chronic Illnesses
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ mb: -3, mt: 4 }}>
          <Typography variant="subtitle2">Vital Signs</Typography>
          <TextField
            id="temperature"
            name="temperature"
            label="Temperature (Celsius)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <TextField
            id="weight"
            name="weight"
            label="Weight (kg)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <TextField
            id="height"
            name="height"
            label="Height (cm)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <TextField
            id="systolic"
            name="systolic"
            label="Blood Pressure - Systolic (mmHg)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: -3, mt: 2 }}>
          <TextField
            id="diastolic"
            name="diastolic"
            label="Blood Pressure - Diastolic (mmHg)"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
