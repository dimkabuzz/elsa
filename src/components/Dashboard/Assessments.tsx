import PatientsChart from './PatientsChart';

import { Grid, Paper, Button } from '@mui/material';
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
          alignItems: 'center',
          flexDirection: 'column',
          height: '80vh',
        }}
      >
        <Button
          variant="contained"
          onClick={onAddNew}
          sx={{ alignSelf: 'end', mb: 4 }}
        >
          <Add /> New Assessment
        </Button>
        <PatientsChart />
      </Paper>
    </Grid>
  );
}
