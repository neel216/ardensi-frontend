import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Login: 'login', // TODO: make login screen
        Search: 'search',
        Add: 'add',
        Account: 'account',
        Browse: 'browse',
        Listing: 'listing',
        EditAccount: 'edit',
        UserListings: 'listings'
      },
    },
  },
};
