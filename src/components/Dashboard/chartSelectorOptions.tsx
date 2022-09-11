import { RangeSelector } from 'plotly.js';

export const selectorOptions: RangeSelector = {
  buttons: [
    {
      step: 'day',
      stepmode: 'backward',
      count: 7,
      label: 'Week',
    },
    {
      step: 'month',
      stepmode: 'backward',
      count: 1,
      label: 'Month',
    },
    {
      step: 'month',
      stepmode: 'backward',
      count: 3,
      label: 'Semester',
    },
    {
      step: 'year',
      stepmode: 'todate',
      count: 1,
      label: 'Year',
    },
    {
      step: 'all',
    },
  ],
  visible: true,
  x: -5,
  y: 20,
  xanchor: 'left',
  yanchor: 'bottom',
  bgcolor: 'rgb(238, 238, 238)',
  activecolor: 'rgb(212, 212, 212)',
  borderwidth: 0,
  bordercolor: 'rgb(68, 68, 68)',
  font: {
    family: 'Roboto',
    size: 12,
    color: 'rgb(42, 63, 95)',
  },
};
