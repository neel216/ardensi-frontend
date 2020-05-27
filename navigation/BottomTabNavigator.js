import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

import SearchScreen from '../screens/searchScreen/SearchScreen';
import BrowseScreen from '../screens/browseScreen/BrowseScreen';
import ListingScreen from '../screens/browseScreen/ListingScreen';
import AddScreen from '../screens/addScreen/AddScreen';
import AccountScreen from '../screens/accountScreen/AccountScreen';
import EditAccountScreen from '../screens/accountScreen/EditAccountScreen';
import UserListingsScreen from '../screens/accountScreen/UserListingsScreen';
import UserListingScreen from '../screens/accountScreen/UserListingScreen';

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
      <AccountStack.Screen
        name="EditAccount"
        component={EditAccountScreen}
        options={{
          headerBackTitle: 'Account'
        }}
      />
      <AccountStack.Screen
        name="UserListings"
        component={UserListingsScreen}
        options={{
          headerBackTitle: 'Account'
        }}
      />
      <AccountStack.Screen
        name="Listing"
        component={UserListingScreen}
        options={{
          headerBackTitle: 'Listings'
        }}
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