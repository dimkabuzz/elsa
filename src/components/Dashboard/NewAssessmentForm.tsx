import { useState, Fragment } from 'react';

import {
  Box,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  LinearProgress,
} from '@mui/material';

import { Cancel } from '@mui/icons-material';

import PatientIntake from './PatientIntake';
import PresentingComplaints from './PresentingComplaints';
import DietaryInformation from './DietaryInformation';
import FinalAssessment from './FinalAssessment';
import Title from './Title';

const steps = [
  'Patient Intake',
  'Presenting Complaints',
  'Dietary Information',
  'Final Assessment',
];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <PatientIntake />;
    case 1:
      return <PresentingComplaints />;
    case 2:
      return <DietaryInformation />;
    case 3:
      return <FinalAssessment />;
    default:
      throw new Error('Unknown step');
  }
};

type Props = {
  onDiscard: () => void;
};

export default function NewAssessmentForm({ onDiscard }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const resetHandler = () => {
    setActiveStep(0);
  };

  return (
    <Grid item xs={8}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          overflow: 'auto',
        }}
      >
        <Title>New Assessment</Title>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Assessment Summary
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                ID: PXT-27-1644800861722
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                Amelia Trifan, 6 years and 5 months
              </Typography>
              <Box m={1}>
                <Typography variant="caption" display="block">
                  Presenting symptoms
                </Typography>
                <Typography variant="body2">Vomiting, Diarrhoea</Typography>
              </Box>
              <Box display={'flex'} mt={2} mb={4}>
                <Typography variant="body2" fontWeight={500} width="50%">
                  YOUR DECISION
                </Typography>
                <Typography variant="body2" fontWeight={500} width="50%">
                  Gastroenteritis
                </Typography>
              </Box>
              <Typography variant="body2" fontWeight={500}>
                ELSA'S DIAGNOSIS
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                rowGap={1}
                ml={1}
                mt={2}
                mb={4}
              >
                <Typography variant="body2" fontWeight={500} width="50%">
                  Gastroenteritis
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={45}
                  sx={{ width: '50%' }}
                />
                <Typography variant="body2" fontWeight={500} width="50%">
                  Gastritis
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={35}
                  sx={{ width: '50%' }}
                />
                <Typography variant="body2" fontWeight={500} width="50%">
                  Typhoid
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={25}
                  sx={{ width: '50%' }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                  gap: 1,
                  height: '100%',
                }}
              >
                <Button variant="outlined" onClick={onDiscard}>
                  Go to Dashboard
                </Button>
                <Button variant="contained" onClick={resetHandler}>
                  New Assessment
                </Button>
              </Box>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'end',
                  gap: 1,
                  mt: 8,
                  height: '100%',
                }}
              >
                <Button
                  onClick={onDiscard}
                  sx={{
                    mr: 'auto',
                  }}
                >
                  <Cancel /> Discard
                </Button>
                {activeStep !== 0 && (
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? 'Complete Assessment'
                    : 'Next'}
                </Button>
              </Box>
            </Fragment>
          )}
        </Fragment>
      </Paper>
    </Grid>
  );
}
