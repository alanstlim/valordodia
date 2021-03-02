import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { StatusBar } from 'react-native'

import TabBar from './components/tabBar';

import SplashScreen from './pages/splash';
import Home from './pages/home';
import Calculator from './pages/calculator';
import Profile from './pages/profile';

const Routes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="splash" component={SplashScreen} initial/>
      <Scene key="bottomBar" tabBarComponent={props => <TabBar {...props} />} tabs tabBarPosition="bottom">
        <Scene key="home" component={Home} hideNavBar />
        <Scene key="calculator" component={Calculator} hideNavBar />
        <Scene key="profile" component={Profile} hideNavBar/>
      </Scene>
    </Stack>
  </Router>
  );

  export default Routes;