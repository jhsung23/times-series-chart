import styled from 'styled-components';

import { TimeseriesChart } from '@/pages/mainPage';

const MainPage = () => {
  return (
    <Main>
      <TimeseriesChart />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export default MainPage;
