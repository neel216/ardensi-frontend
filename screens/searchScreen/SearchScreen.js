import * as React from 'react';
import { StyleSheet, Text, View, SectionList, SafeAreaView } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';

import { http } from '../../utils/http';


export default function SearchScreen({ navigation }) {
  let preset = [{title: 'listings',
                 data: [{category: '',
                         title: '',
                         college: '',
                         pay: '',
                         description: '',
                         time: '',
                         seller_first: '',
                         seller_last: '',
                         seller_email: ''
                        }]
                }];
  
  const [search, updateSearch] = useState('');
  const [listings, setListings] = useState(preset);
  const [showListings, setShowListings] = useState(false);
  
  const getListings = () => {
    http.post('/listing.search', {search: {param: 'college', val: 'UNC-Chapel Hill'}}) // update 'UNC-Chapel Hill' with user.college or whatever
    .then((response) => {
      let clean = [{title: 'listings', data: []}];
      for (const [id, data] of Object.entries(response.data)) {
        clean[0].data.push(data);
      }
      setListings(clean);
    });
  }

  const Listing = ({ data }) => (
    <RectButton style={styles.listing} onPress={() => navigation.navigate('Listing', {info: data}) }>
        <View>
          <View style={styles.listingTextContainer}>
            <Text style={styles.categoryText}>{data.category}</Text>
            <Text style={styles.titleText}>{data.title}</Text>
            <Text style={styles.collegeText}>at {data.college}</Text>
            <Text style={styles.payText}>${data.pay}</Text>
            <Text style={styles.descriptionText}>{data.description}</Text>
            <View style={styles.footerTextContainer}>
              <View style={{flex: 1}}>
                <Text style={styles.footerTextLeft}>Verified Student <Text style={{ color: '#7AD492' }}>✓</Text></Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.footerTextRight}>{data.time} ago</Text>
              </View>
            </View>
          </View>
        </View>
    </RectButton>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: -10}}>
        <SearchBar
          placeholder="Search Listings..."
          platform='ios'
          onChangeText={(search) => {
            if (search === '') {
              updateSearch('');
              setListings(preset);
            }
            else {
            updateSearch(search);
            }
          }}
          value={search}
          containerStyle={{backgroundColor: '#7abbec'}}
          inputContainerStyle={{backgroundColor: '#fafafa'}}
          inputStyle={{fontSize: 15, margin: 0}}
          cancelButtonProps={{color: 'white'}}
          returnKeyType='search'
          onSubmitEditing={() => {
            getListings();
            setShowListings(true);
          }}
          onClear={() => {
            setShowListings(false);
            setListings(preset);
          }}
        />
      </View>
      {showListings ?
        <SectionList
          sections={listings}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Listing data={item} /> }
          renderSectionHeader={() => null}
        />
      : null}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  listing: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(122, 187, 236, 0.69)',
    borderRadius: 20,
    marginTop: 15,
  },
  categoryText: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: 19,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  collegeText: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  payText: {
    fontSize: 15,
    color: '#7AD492',
    alignSelf: 'flex-start',
    marginTop: 2,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-start',
    marginTop: 2,
    lineHeight: 19
  },
  footerTextContainer: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  footerTextLeft: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    marginBottom: -10
  },
  footerTextRight: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    textAlign: 'right',
    marginBottom: -10
  },
});
