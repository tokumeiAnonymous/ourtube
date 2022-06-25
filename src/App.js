import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import GlobalStyles from './Style/Global.style';
import { lightTheme } from './Style/Theme.style';

function App() {
  return (
    <div className="App">
      {/**
       * Header
       * Sidebar
       * Main
       */}
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
