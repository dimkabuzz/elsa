import Plotly from 'plotly.js-cartesian-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
import useReadCSV from '../../hooks/useReadCSV';
import { selectorOptions } from './chartSelectorOptions';

const Plot = createPlotlyComponent(Plotly);

type PatientData = {
  DATA: string;
  N_PAZ: number;
};

export default function PatientsChart() {
  const analyzed = useReadCSV<PatientData>('/data/analizzati.csv');
  const total = useReadCSV<PatientData>('/data/totali.csv');

  const patientsAnalyzed: Plotly.Data = {
    x: analyzed?.data?.map(row => row.DATA),
    y: analyzed?.data?.map(row => row.N_PAZ),
    hovertemplate: `<b>Number of patients</b>:<br>%{y}<br><b>Date</b>:<br>%{x}</b>`,
    mode: 'lines',
    line: { shape: 'spline', smoothing: 1.3, color: '#045a8d' },
    fill: 'tozeroy',
    type: 'scatter',
    name: 'Analyzed',
  };

  const patientsTotal: Plotly.Data = {
    x: total?.data?.map(row => row.DATA),
    y: total?.data?.map(row => row.N_PAZ),
    hovertemplate: `<b>Number of patients</b>:<br>%{y}<br><b>Date</b>:<br>%{x}</b>`,
    mode: 'lines',
    line: { shape: 'spline', smoothing: 1.3, color: '#74a9cf' },
    fill: 'tozeroy',
    type: 'scatter',
    name: 'Total',
  };

  const data = [patientsAnalyzed, patientsTotal];

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
