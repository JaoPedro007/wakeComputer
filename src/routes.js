import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './pages/home';
import { Settings } from './pages/settings';

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}