import styled from 'styled-components';

import { Chip, ChipValue } from '@/components/Chip';

type Props = {
  values: Exclude<ChipValue, null>[];
  selectedChip: ChipValue;
  changeSelectedChip: (chip: ChipValue) => void;
};

const ChipSet = ({ values, selectedChip, changeSelectedChip }: Props) => {
  return (
    <Ul>
      {values
        .sort((a, b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        })
        .map((value) => (
          <Chip
            key={value}
            value={value}
            selected={selectedChip === value}
            changeSelectedChip={changeSelectedChip}
          />
        ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  gap: 6px;
`;

export default ChipSet;
