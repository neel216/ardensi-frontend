import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { useState } from 'react';
import ModalSelector from 'react-native-modal-selector';

export default function AddScreen({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            Alert.alert('Created listing', 'Listing posted!');
            setCategory('');
            setTitle('');
            setPay('');
            setPaymentType('');
            setDescription('');
          }}
          title="Post"
          color="white"
        />
      ),
    });
  }, []);

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [pay, setPay] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [description, setDescription] = useState('');

  const categories = [
    { key: 'Tutoring', section: true, label: 'Tutoring' },
    { key: 'Tutoring', label: 'Math' },
    { key: 'Tutoring', label: 'English' },
    { key: 'Tutoring', label: 'Science' },
    { key: 'Tutoring', label: 'History' },
    { key: 'Tutoring', label: 'Computer Science' },
    { key: 'Tutoring', label: 'Engineering' },
    { key: 'Business Consulting', section: true, label: 'Business Consulting' },
    { key: 'Business Consulting', label: 'Marketing' },
    { key: 'Business Consulting', label: 'Finance' },
    { key: 'Business Consulting', label: 'Programming' },
    { key: 'Miscellaneous', section: true, label: 'Miscellaneous' },
    { key: 'Miscellaneous', label: 'Aesthetics' },
    { key: 'Miscellaneous', label: 'Cosmetics' },
    { key: 'Miscellaneous', label: 'Music' },
    { key: 'Miscellaneous', label: 'Textbooks' },
    { key: 'Miscellaneous', label: 'Housing' },
  ];
  const paymentTypes = [
    { key: 'Hourly', label: 'Hourly' },
    { key: 'Flat fee', label: 'Flat fee' },
  ];

  const renderListingForm = () => {
    return (
      <View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Category:</Text>
          <ModalSelector
            data={categories}
            initValue="Select Listing Category"
            supportedOrientations={['portrait']}
            onChange={(option) => { setCategory(option.key.concat(' - '.concat(option.label)))}}>
              <TextInput
                style={styles.optionSelect}
                editable={false}
                placeholder="Select Listing Category"
                value={category}
              />
          </ModalSelector>
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Title:</Text>
          <TextInput
              style={styles.optionSelect}
              placeholder="Enter Listing Title"
              returnKeyType='done'
              clearButtonMode='while-editing'
              maxLength={50}
              onChangeText={title => setTitle(title)}
          />
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Pay:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="$ Enter Payment Amount"
              keyboardType='numeric'
              returnKeyType='done'
              clearButtonMode='while-editing'
              onChangeText={pay => setPay(pay)}
            />
            <ModalSelector
            data={paymentTypes}
            initValue="Select Payment Type"
            supportedOrientations={['portrait']}
            onChange={(option) => { setPaymentType(option.label); }}>
              <TextInput
                style={styles.optionSelect}
                editable={false}
                placeholder="Select Payment Type"
                value={paymentType}
              />
            </ModalSelector>
        </View>
        <View>
          <Text style={{ color: 'grey', fontSize: 15, paddingTop: 5 }}>Description:</Text>
            <TextInput
              style={styles.optionSelect}
              placeholder="Enter Listing Description"
              returnKeyType='done'
              clearButtonMode='while-editing'
              maxLength={200}
              multiline={true}
              onChangeText={description => setDescription(description)}
            />
        </View>
    </View>
    );
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: '500', fontSize: 17, textAlign: 'center'}}>Add Listing</Text>
      </View>
      <KeyboardAvoidingView>
        <ScrollView style={{height: '100%', paddingTop: 5}}>
          <View style={styles.listing}>
            {renderListingForm()}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
