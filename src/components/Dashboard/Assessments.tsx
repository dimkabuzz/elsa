import PatientsChart from './PatientsChart';

import { Grid, Paper, Button, Typography, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

type Props = {
  onAddNew: () => void;
};

export default function Assessments({ onAddNew }: Props) {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography component={'h2'} variant={'h6'}>
            Patients History
          </Typography>
          <Button variant="contained" onClick={onAddNew}>
            <Add /> New Patient
          </Button>
        </Box>
        <PatientsChart />
      </Paper>
    </Grid>
  );
}
