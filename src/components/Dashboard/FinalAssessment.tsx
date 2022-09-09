import { Fragment } from 'react';
import {
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Checkbox,
  Select,
  MenuItem,
  Alert,
  AlertTitle,
  Button,
  TextareaAutosize,
} from '@mui/material';

export default function FinalAssessment() {
  return (
    <Fragment>
      <Typography variant="subtitle2" gutterBottom>
        Condition Decision
      </Typography>
      <Typography variant="body2">
        Based on your knowledge and assessment, what is your opinion of the
        underlying causing the patients symptoms
      </Typography>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">
          Choose condtitions
        </InputLabel>
        <Select labelId="conditions" id="conditions">
          <MenuItem value={10}>Anaemia</MenuItem>
          <MenuItem value={20}>Asthma</MenuItem>
          <MenuItem value={30}>Cholera</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle2" gutterBottom sx={{ mt: 4 }}>
        Recommendations provided
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Refered to the nearest facility"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Refered to a laboratory testing"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Dispensed medication to the patient"
        />
      </FormGroup>
      <Alert severity="warning">
        <AlertTitle>
          Please make sure to supply patient with Oral Rehydration Salts (ORS)
        </AlertTitle>
        <Button size="small" variant="contained" color="success">
          Tap to Include ORS
        </Button>
      </Alert>
      <Typography variant="subtitle2" gutterBottom sx={{ mt: 4 }}>
        Provided additional recommendations to the patient
      </Typography>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={4}
        placeholder="Please type in recommendations, if any"
        style={{ maxWidth: '100%', minHeight: 70 }}
      />
    </Fragment>
  );
}
