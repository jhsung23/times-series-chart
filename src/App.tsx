import styled from 'styled-components';

import { Chart, Header } from '@/components';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Chart />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
`;

export default App;
