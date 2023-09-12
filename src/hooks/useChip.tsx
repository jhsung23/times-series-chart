import { useState } from 'react';

import { ChipValue } from '@/components/Chip';

const useChip = () => {
  const [selectedChip, setSelectedChip] = useState<ChipValue>(null);

  const changeSelectedChip = (chip: ChipValue) => {
    if (selectedChip === chip) setSelectedChip(null);
    else setSelectedChip(chip);
  };

  return { selectedChip, changeSelectedChip };
};

export default useChip;
