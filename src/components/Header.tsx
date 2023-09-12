import styled from 'styled-components';

type Props = {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
};

const Header = ({ themeMode, toggleTheme }: Props) => {
  return (
    <StyledHeader onClick={toggleTheme}>
      Time-Series Chart
      <ThemeButton type="button" onClick={toggleTheme}>
        {themeMode === 'light' ? '☀️' : '🌙'}
      </ThemeButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4rem;
  background-color: white;
  font-size: x-large;
  font-weight: bold;
  border-bottom: 1px solid gray;
  z-index: 50;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const ThemeButton = styled.button`
  all: unset;
  position: absolute;
  right: 25px;
  font-size: 1.8rem;
  cursor: pointer;
`;
