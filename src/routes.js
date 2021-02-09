import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { StatusBar } from 'react-native'

import SplashScreen from './pages/splash';
import Home from './pages/home';
import Calculator from './pages/calculator';
import Profile from './pages/profile';

const Routes = () => (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="splash" component={SplashScreen} />
        <Scene key="home" component={Home} />
        <Scene key="calculator" component={Calculator} initial/>
        <Scene key="profile" component={Profile} />
      </Stack>
    </Router>
  );

  export default Routes;