import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const serverUrl = 'https://divine-cortex-277508.ue.r.appspot.com';
const http = axios.create({
  baseURL: serverUrl,
});

export default function BrowseScreen() {  

  let response1 = {category: 'Tutoring - Computer Science',
                  title: 'Computer Science Tutor Needed',
                  college: 'UNC-Chapel Hill',
                  pay: '8/hr',
                  description: 'Looking for a computer science tutor who can assist with lessons relating to COMP 116. Specifically looking for guidance with data structures and object oriented programming in Python.'
                };
  let response2 = [{ title: 'listings',
                     data: [response1,
                            response1,
                            response1,
                           ]
                    }
                  ];

  return (
    <SectionList
      sections={response2}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Listing data={item} /> }
      renderSectionHeader={() => null}
    />
  );
}


function sendRequest() {
  return http.post('/listing.search', {search: {param: 'college', val: 'UNC-Chapel Hill'}})
  .then((response) => {
    let clean = [{title: 'listings', data: []}];
    for (const [id, data] of Object.entries(response.data)) {
      clean[0].data.push(data);
    }
    console.log(clean);
    return clean;
  });
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
