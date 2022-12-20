/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { name as appName } from './app.json';
import App from './App';
import store from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#060A51',
    secondary: '#24D176',
  },
};

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
