import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import styled, { css } from 'styled-components';

import { ResponseData } from '@/data/mockDataTypes';

const TimeseriesTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload) {
    const { id, value_area, value_bar } = payload[0].payload as ResponseData;

    return (
      <Container>
        <Li>id: {id}</Li>
        <Li color={payload[0].color}>value_bar: {value_bar}</Li>
        <Li color={payload[1].color}>value_area: {value_area}</Li>
      </Container>
    );
  }

  return null;
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 4px;
  border: 0.2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;

const Li = styled.li<{ color?: string }>`
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export default TimeseriesTooltip;
