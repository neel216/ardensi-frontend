import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

const serverUrl = 'https://divine-cortex-277508.ue.r.appspot.com';
const http = axios.create({
  baseURL: serverUrl,
});

export default function ListingScreen({ route, navigation }) {
  const { info } = route.params;

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: '500', fontSize: 17, textAlign: 'center'}}>View Listing</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View>
          <Listing data={info} />
        </View>
        <View>
          <RectButton style={styles.buyButton} onPress={() => console.log('Listing purchased')}>
            <Text style={styles.buyText}>Purchase</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
}

const Listing = ({ data }) => (
  <View style={styles.listing}>
      <View>
        <Text style={styles.categoryText}><Text style={{ color: 'grey', fontSize: 15 }}>Category:</Text>{'\n'}{data.category}</Text>
        <Text style={styles.titleText}><Text style={{ color: 'grey', fontSize: 15 }}>Title:</Text>{'\n'}{data.title}</Text>
        <Text style={styles.collegeText}><Text style={{ color: 'grey', fontSize: 15 }}>College:</Text>{'\n'}{data.college}</Text>
        <Text style={styles.payText}><Text style={{ color: 'grey', fontSize: 15 }}>Pay:</Text>{'\n'}${data.pay}</Text>
        <Text style={styles.descriptionText}><Text style={{ color: 'grey', fontSize: 15 }}>Description:</Text>{'\n'}{data.description}</Text>
        <RectButton style={styles.sellerContainer}>
          <Text style={styles.sellerText}>
            Posted by:{'\n'}
            {data.seller_first} {data.seller_last}{'\n'}
            {data.seller_email}
          </Text>
        </RectButton>
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
);

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
  categoryText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 7
  },
  titleText: {
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
  payText: {
    fontSize: 18,
    color: '#7AD492',
    alignSelf: 'flex-start',
    marginTop: 7,
  },
  descriptionText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginTop: 7,
    lineHeight: 22
  },
  sellerContainer: {
    paddingTop: 6,
  },
  sellerText: {
    color: 'grey',
    fontSize: 14
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
  footerTextRight: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    textAlign: 'right',
    marginBottom: 0
  },
  buyButton: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(122, 187, 236, 0.69)',
    borderColor: 'rgba(122, 187, 236, 0.69)',
    marginTop: 10
  },
  buyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7AD492'
  },
});
