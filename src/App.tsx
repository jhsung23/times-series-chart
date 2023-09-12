import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@/components';
import { MainPage } from '@/pages/mainPage';
import { dark, light } from '@/styles';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? light : dark;
  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
