import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function AccountScreen({ navigation }) {
  let preset = {
    user_id: '1234',
    first_name: 'Neel',
    last_name: 'Runton',
    email: 'neelr216@gmail.com',
    college: 'UNC-Chapel Hill'
  }

  const [userInfo, setUserInfo] = useState(preset);


  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: '500', fontSize: 17, textAlign: 'center'}}>My Account</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={{marginBottom: 40}}>
          <AccountInfo data={userInfo} />
        </View>
        <View>
          <OptionButton
            label="Edit Account Information"
            onPress={() => navigation.navigate('EditAccount')}
          />
          <OptionButton
            label="View my Available Listings"
            onPress={() => navigation.navigate('UserListings', {info: 'My Available Listings'}) }
          />
          <OptionButton
            label="View my Sold Listings"
            onPress={() => navigation.navigate('UserListings', {info: 'My Sold Listings'}) }
          />
          <OptionButton
            label="View my Purchases"
            onPress={() => navigation.navigate('UserListings', {info: 'My Purchases'}) }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const AccountInfo = ({ data }) => (
  <View style={styles.account}>
      <View>
        <Text style={styles.nameText}><Text style={{ color: 'grey', fontSize: 15 }}>Name:</Text>{'\n'}{data.first_name} {data.last_name}</Text>
        <Text style={styles.emailText}><Text style={{ color: 'grey', fontSize: 15 }}>Email:</Text>{'\n'}{data.email}</Text>
        <Text style={styles.collegeText}><Text style={{ color: 'grey', fontSize: 15 }}>Attends:</Text>{'\n'}{data.college}</Text>
        <View style={styles.footerTextContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.footerTextLeft}>Verified Student <Text style={{ color: '#7AD492' }}>✓</Text></Text>
            </View>
        </View>
      </View>
  </View>
);

const OptionButton = ({ label, onPress }) => {
  return (
    <RectButton style={styles.optionButton} onPress={onPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.optionText}>{label}</Text>
        </View>
        <View style={styles.optionIcon}>
          <Ionicons name={'ios-arrow-forward'} size={22} color="rgb(122, 187, 236)" />
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(122, 187, 236, 0.69)',
  },
  account: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(122, 187, 236, 0.5)',
    borderColor: 'rgba(122, 187, 236, 0.69)',
    //borderRadius: 20,
    marginTop: 5,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 7
  },
  emailText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginTop: 7,
  },
  collegeText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 7,
  },
  footerTextContainer: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  footerTextLeft: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    marginBottom: 0
  },
  optionButton: {
    marginTop: 5,
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(122, 187, 236, 0.69)',
  },
  optionText: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  optionIcon: {
    alignSelf: 'flex-start',
    alignItems: 'center'
  }
});
