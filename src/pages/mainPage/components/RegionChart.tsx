import { Area, Bar, ComposedChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Heading } from '@/components';
import { mockData } from '@/data/mockData';

const CHART_NAME = `Time-series Chart of ${Object.keys(mockData.response)[0].split(' ')[0]}`;

const data = Object.keys(mockData.response).map((key) => ({
  time: key.split(' ')[1],
  ...mockData.response[`${key}`],
}));

const RegionChart = () => {
  return (
    <>
      <Heading size="medium">{CHART_NAME}</Heading>
      <ResponsiveContainer width={'85%'} height={600}>
        <ComposedChart
          data={Object.values(data)}
          margin={{ top: 0, right: 24, bottom: 0, left: 24 }}
        >
          <XAxis dataKey="time" domain={['dataMin', 'dataMax']} />
          <YAxis
            label={{ value: 'value_bar', angle: -90, position: 'left' }}
            yAxisId="left"
            dataKey="value_bar"
          />
          <YAxis
            label={{ value: 'value_area', angle: 90, position: 'right' }}
            yAxisId="right"
            dataKey="value_area"
            orientation="right"
            domain={[0, 200]}
          />
          <Legend />
          <Bar yAxisId={'left'} dataKey="value_bar" fill="#BBDED6" />
          <Area yAxisId={'right'} dataKey="value_area" fill="#fab1b3" stroke="#ff8589" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default RegionChart;
