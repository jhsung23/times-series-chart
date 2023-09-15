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
import { getUniqueProperties, getValuesFromObjectArray, makeKeyToPropertyOfValue } from '@/utils';
import { useTheme } from 'styled-components';

const CHART_NAME = `Time-series Chart of ${Object.keys(mockData.response)[0].split(' ')[0]}`;

const chartDatas = makeKeyToPropertyOfValue(mockData.response, 'time', (key) => key.split(' ')[1]);
const filterChipValues = getValuesFromObjectArray(getUniqueProperties(chartDatas, 'id'));

const TimeseriesChart = () => {
  const { colors } = useTheme();
  const chartColors = colors.chart;

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
      <ResponsiveContainer width={'85%'} height={512}>
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
          <Bar
            yAxisId={'left'}
            dataKey="value_bar"
            fill={chartColors.secondaryBar}
            onClick={(data) => changeSelectedChip(data.id)}
          >
            {chartDatas.map((data) => (
              <Cell
                key={data.time}
                fill={
                  filteredDatas.has(data.time) ? chartColors.primaryBar : chartColors.secondaryBar
                }
              />
            ))}
          </Bar>
          <Area
            yAxisId={'right'}
            dataKey="value_area"
            fill={chartColors.secondaryArea}
            stroke={chartColors.primaryArea}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default TimeseriesChart;
