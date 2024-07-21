'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import { useForm } from 'react-hook-form';
import Gratitude from './Gratitude/Gratitude';
import { FormData } from '@/models/types';

const steps = [
  'О компании',
  'О продукции',
  'О дизайне',
];

export default function HorizontalLinearAlternativeLabelStepper({ setPending, setSuccess }: any) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const stepsComps = [{
    id: 1, component: <FirstStep control={control} />
  }, {
    id: 2, component: <SecondStep control={control} />
  }, {
    id: 3, component: <ThirdStep control={control} />
  }];
  const isStepOptional = (step: number) => {
    return null;
  };
  const submitForm = async (data: FormData, e: any) => {
    e.preventDefault();
    try {
      setPending(true);
      const response = await fetch('/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      setPending(false);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error('Error sending form data:', error);
      setPending(false);
    }
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = (e: any) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (activeStep === steps.length - 1) {
      handleSubmit(submitForm)(e);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '1rem' }} component={'form'}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Опционально</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Gratitude />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'center' }}>
            <Button onClick={handleReset} sx={{ color: 'black' }}>Еще раз</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1, maxWidth: '1400px', margin: '2rem auto' }}>
            {stepsComps[activeStep] && stepsComps[activeStep].component}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, maxWidth: '1400px', margin: '2rem auto' }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: 'black' }}
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Пропустить
              </Button>
            )}
            <Button onClick={handleNext} sx={{ color: 'black' }}>
              {activeStep === steps.length - 1 ? 'Готово' : 'Далее'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
