import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Header } from '../Header';
import { Routes } from '../../Routes';
import { ToastContainer } from '../Toast/ToastContainer';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
