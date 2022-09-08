import { Grid, Paper, Typography, Button } from '@mui/material';
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
        <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
          Hi, Dumitru Trifan
        </Typography>
        <Typography component="h3" variant="h6" color="primary">
          Start New Assessment
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          To start new assessment, please click on the button bellow
        </Typography>
        <Button variant="contained" onClick={onAddNew}>
          <Add /> New Assessment
        </Button>
      </Paper>
    </Grid>
  );
}
