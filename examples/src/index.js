import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Default from './Default';
import HomeScreen from './HomeScreen';
import VisibleSelection from './VisibleSelection';
import Customizable from './Customizable';
import Customizable2 from './Customizable2';
import CustomView from './CustomView';

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  default: Default,
  visibleSelection: VisibleSelection,
  customizable: Customizable,
  customizable2: Customizable2,
  customView: CustomView,
});

export default createAppContainer(AppNavigator);
