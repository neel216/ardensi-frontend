import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function EditAccountScreen({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            Alert.alert('Account Updated', 'Your account information has been updated!');
            navigation.goBack();
          }}
          title="Update"
          color="white"
        />
      ),
    });
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');

  const renderAccountForm = () => {
    return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>First name:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="Enter First Name"
              returnKeyType='done'
              autoCorrect={false}
              clearButtonMode='while-editing'
              maxLength={50}
              onChangeText={firstName => setFirstName(firstName)}
            />
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Last name:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="Enter Last Name"
              returnKeyType='done'
              autoCorrect={false}
              clearButtonMode='while-editing'
              maxLength={50}
              onChangeText={lastName => setLastName(lastName)}
            />
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Email:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="Enter Email"
              returnKeyType='done'
              keyboardType='email-address'
              clearButtonMode='while-editing'
              maxLength={50}
              onChangeText={email => setEmail(email)}
            />
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>College:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="Enter College"
              returnKeyType='done'
              clearButtonMode='while-editing'
              maxLength={50}
              onChangeText={college => setCollege(college)}
            />
        </View>
      </View>
    </KeyboardAvoidingView>
    );
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: '500', fontSize: 17, textAlign: 'center'}}>Edit Account</Text>
      </View>
      <ScrollView style={{height: '100%', paddingTop: 5}}>
        <View style={styles.listing}>
          {renderAccountForm()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(122, 187, 236, 0.69)',
  },
  listing: {
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
  optionSelect: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: 'rgba(122, 187, 236, 0.69)',
    paddingVertical: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 5,
  },
});
