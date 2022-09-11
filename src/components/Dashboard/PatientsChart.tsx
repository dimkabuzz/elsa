import { useState, useEffect, useCallback } from 'react';
import Papa, { ParseResult } from 'papaparse';
import Plotly from 'plotly.js-cartesian-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
import { RangeSelector } from 'plotly.js';

const Plot = createPlotlyComponent(Plotly);

export default function PatientsChart() {
  type RowData = {
    DATA: string;
    N_PAZ: number;
  };

  type PatientData = {
    data: RowData[];
  };

  const [analyzedValues, setAnalyzedValues] = useState<
    PatientData | undefined
  >();
  const [totalValues, setTotalValues] = useState<PatientData | undefined>();

  const getAnalyzedPatientsCSV = useCallback(() => {
    Papa.parse('/data/analizzati.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<RowData>) => {
        setAnalyzedValues(results);
      },
    });
  }, []);

  const getTotalPatientsCSV = useCallback(() => {
    Papa.parse('/data/totali.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<RowData>) => {
        setTotalValues(results);
      },
    });
  }, []);

  useEffect(() => {
    getAnalyzedPatientsCSV();
    getTotalPatientsCSV();
  }, [getAnalyzedPatientsCSV, getTotalPatientsCSV]);

  const patientsAnalyzed: Plotly.Data = {
    x: analyzedValues?.data.map(row => row.DATA),
    y: analyzedValues?.data.map(row => row.N_PAZ),
    hovertemplate: `<b>Number of patients</b>:<br>%{y}<br><b>Date</b>:<br>%{x}</b>`,
    mode: 'lines',
    line: { shape: 'spline', smoothing: 1.3, color: '#045a8d' },
    fill: 'tozeroy',
    type: 'scatter',
    name: 'Analyzed',
  };

  const patientsTotal: Plotly.Data = {
    x: totalValues?.data.map(row => row.DATA),
    y: totalValues?.data.map(row => row.N_PAZ),
    hovertemplate: `<b>Number of patients</b>:<br>%{y}<br><b>Date</b>:<br>%{x}</b>`,
    mode: 'lines',
    line: { shape: 'spline', smoothing: 1.3, color: '#74a9cf' },
    fill: 'tozeroy',
    type: 'scatter',
    name: 'Total',
  };

  const data = [patientsAnalyzed, patientsTotal];

  const selectorOptions: RangeSelector = {
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

  return (
    <Plot
      data={data}
      useResizeHandler
      style={{ width: '100%', height: 400 }}
      layout={{
        showlegend: true,
        legend: {
          // @ts-ignore-start
          title: {
            text: 'Patients',
          },
          // @ts-ignore-end
        },
        autosize: true,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 40,
          pad: 0,
        },
        plot_bgcolor: '#e5ecf6',
        paper_bgcolor: '#ffffff',
        font: {
          family: 'Roboto',
          size: 12,
          color: '#2a3f5f',
        },
        yaxis: {
          title: 'Number of patients',
          gridcolor: '#fff',
          fixedrange: true,
        },
        xaxis: {
          title: 'Date',
          gridcolor: '#fff',
          rangeselector: selectorOptions,
          rangeslider: {},
        },
      }}
    />
  );
}
