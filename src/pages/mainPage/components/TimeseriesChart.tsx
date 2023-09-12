import {
  Area,
  Bar,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Heading } from '@/components';
import { ChipSet } from '@/components/Chip';
import { mockData } from '@/data/mockData';
import { useChip } from '@/hooks';
import { TimeseriesTooltip } from '@/pages/mainPage';
import { getUniqueAttributes, getValuesFromObjectArray, makeKeyToAttributeOfValue } from '@/utils';

const CHART_NAME = `Time-series Chart of ${Object.keys(mockData.response)[0].split(' ')[0]}`;

const chartDatas = makeKeyToAttributeOfValue(mockData.response, 'time');
const filterChipValues = getValuesFromObjectArray(getUniqueAttributes(chartDatas, 'id'));

const TimeseriesChart = () => {
  const { selectedChip, changeSelectedChip } = useChip();
  const filteredDatas = new Set(
    chartDatas.filter((data) => data.id === selectedChip).map((data) => data.time),
  );

  return (
    <>
      <Heading size="medium">{CHART_NAME}</Heading>
      <ChipSet
        values={filterChipValues}
        selectedChip={selectedChip}
        changeSelectedChip={changeSelectedChip}
      />
      <ResponsiveContainer width={'85%'} height={600}>
        <ComposedChart data={chartDatas} margin={{ top: 0, right: 24, bottom: 0, left: 24 }}>
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
          <Tooltip content={<TimeseriesTooltip />} />
          <Bar yAxisId={'left'} dataKey="value_bar" fill="#aaded1">
            {chartDatas.map((data) => (
              <Cell key={data.time} fill={filteredDatas.has(data.time) ? '#2dbebb' : '#aaded1'} />
            ))}
          </Bar>
          <Area yAxisId={'right'} dataKey="value_area" fill="#fd9a9d" stroke="#ff8589" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default TimeseriesChart;
