import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import SearchScreen from '../screens/SearchScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AddScreen from '../screens/AddScreen';
import AccountScreen from '../screens/AccountScreen';
import ListingScreen from '../screens/ListingScreen';

import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const AddStack = createStackNavigator();
const AccountStack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'Browse';


function SearchStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.tintColor, shadowOpacity: 0 },
                       headerTitleStyle: { fontFamily: 'footlight',
                                           fontSize: 30,
                                           marginBottom: -5 },
                                           headerTintColor: 'white',
                                           headerTitle: 'Ardensi'
                      }}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
      />
      <BrowseStack.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          headerBackTitle: 'Search'
        }}
      />
    </SearchStack.Navigator>
  );
}

function BrowseStackScreen({ navigation }) {
  return (
    <BrowseStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.tintColor },
                       headerTitleStyle: { fontFamily: 'footlight',
                                           fontSize: 30,
                                           marginBottom: -5 },
                                           headerTintColor: 'white',
                                           headerTitle: 'Ardensi'
                      }}>
      <BrowseStack.Screen
        name="Browse"
        component={BrowseScreen}
      />
      <BrowseStack.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          headerBackTitle: 'Browse'
        }}
      />
    </BrowseStack.Navigator>
  );
}

function AddStackScreen({ navigation }) {
  return (
    <AddStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.tintColor },
                       headerTitleStyle: { fontFamily: 'footlight',
                                           fontSize: 30,
                                           marginBottom: -5 },
                                           headerTintColor: 'white',
                                           headerTitle: 'Ardensi'
                      }}>
      <AddStack.Screen
        name="Add"
        component={AddScreen}
      />
    </AddStack.Navigator>
  );
}

function AccountStackScreen({ navigation }) {
  return (
    <AccountStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.tintColor },
                       headerTitleStyle: { fontFamily: 'footlight',
                                           fontSize: 30,
                                           marginBottom: -5 },
                                           headerTintColor: 'white',
                                           headerTitle: 'Ardensi'
                      }}>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
      />
    </AccountStack.Navigator>
  );
}


export default function BottomTabNavigator({ navigation }) {
  
  navigation.setOptions({headerShown: false});

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{activeTintColor: Colors.tintColor}} >

      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />

      <BottomTab.Screen
        name="Browse"
        component={BrowseStackScreen}
        options={{
          title: 'Browse',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />
     
      <BottomTab.Screen
        name="Add"
        component={AddStackScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}