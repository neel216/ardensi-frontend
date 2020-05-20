import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import SearchScreen from '../screens/SearchScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AddScreen from '../screens/AddScreen';
import AccountScreen from '../screens/AccountScreen';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Browse';

export default function BottomTabNavigator({ navigation }) {
  navigation.setOptions({ headerTintColor: 'white',
                          headerTitleStyle: {fontFamily: 'footlight',
                                             fontSize: 30,
                                             marginBottom: -5,
                                            },
                          headerStyle: {backgroundColor: Colors.tintColor},
                        });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{activeTintColor: Colors.tintColor}} >
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}