import styled, { css } from 'styled-components';

import { ChipValue } from './types';

type Props = {
  value: ChipValue;
  changeSelectedChip: (chip: ChipValue) => void;
} & StyleProps;

type StyleProps = {
  size?: 'small' | 'medium' | 'large' | 'x-large';
  selected?: boolean;
};

const Chip = ({ value, size = 'small', selected = false, changeSelectedChip }: Props) => {
  return (
    <ChipItem size={size} selected={selected}>
      <Button onClick={() => changeSelectedChip(value)}>{value}</Button>
    </ChipItem>
  );
};

const ChipItem = styled.li<StyleProps>`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.chip.border};
  background-color: ${({ theme }) => theme.colors.chip.background};
  color: ${({ theme }) => theme.colors.chip.text};
  cursor: pointer;

  ${({ size }) => css`
    font-size: ${size};
  `}

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.chip.selectedText};
      border: 1px solid ${({ theme }) => theme.colors.chip.selectedBorder};
      background-color: ${({ theme }) => theme.colors.chip.selectedBackground};
    `}
`;

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.45rem 0.6rem;
`;

export default Chip;
