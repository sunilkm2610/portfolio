import '../styles/globals.css';
import { SettingsProvider } from '../components/ide/SettingsContext';

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}

export default MyApp;
