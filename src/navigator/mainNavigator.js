import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings119698Navigator from '../features/Settings119698/navigator';
import Settings119679Navigator from '../features/Settings119679/navigator';
import BlankScreen0119655Navigator from '../features/BlankScreen0119655/navigator';
import Settings119640Navigator from '../features/Settings119640/navigator';
import Settings119621Navigator from '../features/Settings119621/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings119698: { screen: Settings119698Navigator },
Settings119679: { screen: Settings119679Navigator },
BlankScreen0119655: { screen: BlankScreen0119655Navigator },
Settings119640: { screen: Settings119640Navigator },
Settings119621: { screen: Settings119621Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
