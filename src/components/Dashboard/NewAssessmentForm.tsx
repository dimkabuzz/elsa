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
} from '@mui/material';

import { Cancel } from '@mui/icons-material';

import PatientIntake from './PatientIntake';
import PaymentForm from './PaymentForm';
import Review from './Review';
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
      return <PaymentForm />;
    case 2:
      return <Review />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
};

type Props = {
  onDiscard: () => void;
};

export default function Checkout({ onDiscard }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  onClick={onDiscard}
                  sx={{
                    mt: 3,
                    ml: 1,
                    justifySelf: 'flex-start',
                  }}
                >
                  <Cancel /> Discard
                </Button>
                {activeStep !== 0 && (
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
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
