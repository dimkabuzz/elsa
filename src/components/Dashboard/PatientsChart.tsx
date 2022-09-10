import Plotly from 'plotly.js-cartesian-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

export default function PatientsChart() {
  return (
    <Plot
      data={[
        {
          x: [
            '2013-10-01 22:23:00',
            '2013-10-02 22:23:00',
            '2013-10-03 22:23:00',
            '2013-10-04 22:23:00',
            '2013-10-05 22:23:00',
            '2013-10-06 22:23:00',
            '2013-11-07 22:23:00',
            '2013-12-08 22:23:00',
          ],
          y: [1, 3, 6, 7, 5, 3, 2, 1],
          mode: 'lines',
          line: { shape: 'spline', smoothing: 1.3 },
          fill: 'tozeroy',
          type: 'scatter',
        },
        {
          x: [
            '2013-10-01 22:23:00',
            '2013-10-02 22:23:00',
            '2013-10-03 22:23:00',
            '2013-10-04 22:23:00',
            '2013-10-05 22:23:00',
            '2013-10-06 22:23:00',
            '2013-11-07 22:23:00',
            '2013-12-08 22:23:00',
          ],
          y: [5, 7, 9, 8, 4, 3, 2, 4],
          mode: 'lines',
          line: { shape: 'spline', smoothing: 1.3 },
          fill: 'tonexty',
          type: 'scatter',
        },
      ]}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
      layout={{
        autosize: true,
        title: 'A Fancy Plot',
      }}
    />
  );
}
