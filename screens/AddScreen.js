import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import ModalSelector from 'react-native-modal-selector';

export default function AddScreen() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('Enter Listing Title');
  const [pay, setPay] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [description, setDescription] = useState('');

  const categories = [
    { key: 'Tutoring', section: true, label: 'Tutoring' },
    { key: 'Tutoring', label: 'Math' },
    { key: 'Tutoring', label: 'English' },
    { key: 'Tutoring', label: 'Chemistry' },
    { key: 'Tutoring', label: 'History' },
    { key: 'Tutoring', label: 'Computer Science' },
    { key: 'Business Consulting', section: true, label: 'Business Consulting' },
    { key: 'Business Consulting', label: 'Marketing' },
    { key: 'Business Consulting', label: 'Finance' },
    { key: 'Business Consulting', label: 'Programming' },
    { key: 'Miscellaneous', section: true, label: 'Miscellaneous' },
    { key: 'Miscellaneous', label: 'Aesthetics' },
    { key: 'Miscellaneous', label: 'Cosmetics' },
    { key: 'Miscellaneous', label: 'Music' },
  ];
  const paymentTypes = [
    { key: 'Hourly', label: 'Hourly' },
    { key: 'Flat fee', label: 'Flat fee' },
  ];

  const ListingForm = () => {
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
              multiline={true}
              maxLength={200}
              returnKeyType='done'
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
      <ScrollView style={{height: '100%', paddingTop: 5}}>
        <View style={styles.listing}>
          <ListingForm />
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
  }
});
