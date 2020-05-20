import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Login: 'login', // TODO: make login screen
        Search: 'search',
        Browse: 'browse',
        Add: 'add',
        Account: 'account',
      },
    },
  },
};
