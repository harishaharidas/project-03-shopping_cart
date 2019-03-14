import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import TabNavigator from './TabNavigatio';
import MyOrders from '../screens/MyOrder';
import AboutUs from '../screens/AboutUs';
import User from '../screens/User';

const DrawerNavigator = createDrawerNavigator({
  TabNavigator: TabNavigator,
  Home: Home,
  MyOrders: MyOrders,
  AboutUs:AboutUs,
  User:User
},
  {
    initialRouteName: "TabNavigator",
    headerMode: 'none',
  }
);

export default AppContainer = createAppContainer(DrawerNavigator);