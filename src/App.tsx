import * as React from 'react';
import { AppRouter } from './AppRouter';

import './css/App.css';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
      <AppRouter />
  );
};

export default App;