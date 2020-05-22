import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

const serverUrl = 'https://divine-cortex-277508.ue.r.appspot.com';
const http = axios.create({
  baseURL: serverUrl,
});

export default function BrowseScreen() {
  let preset = [{title: 'listings',
                 data: [{category: '',
                         title: '',
                         college: '',
                         pay: '',
                         description: ''
                        }]
                }];
  
  const [listings, setListings] = useState(preset);

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

  useEffect(() => {
    getListings();
  }, []);
  

  return (
    <SectionList
      sections={listings}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Listing data={item} /> }
      renderSectionHeader={() => null}
    />
  );
}

const Listing = ({ data }) => (
  <RectButton style={styles.listing}>
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
              <Text style={styles.footerTextRight}>1 hour ago</Text>
            </View>
          </View>
        </View>
      </View>
  </RectButton>
);

const styles = StyleSheet.create({
  listing: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
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
    fontSize: 20,
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
    lineHeight: 20
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
  }
});
