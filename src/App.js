import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
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
        <Sidebar />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
