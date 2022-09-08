import { Grid, Paper, Typography } from '@mui/material';

export default function NewAssessmentSummary() {
  return (
    <Grid item xs={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Typography
          variant="body2"
          align="center"
          paragraph
          sx={{ color: 'text.disabled', fontStyle: 'italic' }}
        >
          This screen will be constantly changing when there as you move on to
          make any change on the application.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          paragraph
          sx={{ color: 'text.disabled', fontStyle: 'italic' }}
        >
          Changes happen when you make additions to the information about the
          patient.
        </Typography>
      </Paper>
    </Grid>
  );
}
