import * as React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function BrowseScreen() {
  let response2 = {'13453234': {category: 'Tutoring - Computer Science',
                                title: 'Computer Science Tutor Needed',
                                college: 'UNC-Chapel Hill',
                                pay: '8/hr',
                                description: 'Looking for a computer science tutor who can assist with lessons relating to COMP 116. Specifically looking for guidance with data structures and object oriented programming in Python.'
                               },
                   '13545687': {category: 'Tutoring - Computer Science',
                                title: 'Computer Science Tutor Needed',
                                college: 'UNC-Chapel Hill',
                                pay: '8/hr',
                                description: 'Looking for a computer science tutor who can assist with lessons relating to COMP 116. Specifically looking for guidance with data structures and object oriented programming in Python.'
                               },
                   '13587946': {category: 'Tutoring - Computer Science',
                                title: 'Computer Science Tutor Needed',
                                college: 'UNC-Chapel Hill',
                                pay: '8/hr',
                                description: 'Looking for a computer science tutor who can assist with lessons relating to COMP 116. Specifically looking for guidance with data structures and object oriented programming in Python.'
                               }
                  };
  let response = {category: 'Tutoring - Computer Science',
                  title: 'Computer Science Tutor Needed',
                  college: 'UNC-Chapel Hill',
                  pay: '8/hr',
                  description: 'Looking for a computer science tutor who can assist with lessons relating to COMP 116. Specifically looking for guidance with data structures and object oriented programming in Python.'
                };
  let response3 = [{ title: 'listings', data: [response,
                                               response,
                                               response,
                                              ]
                    }];

  /*
  for (const [id, data] of Object.entries(response2)) {
    console.log(data);
  }
  TODO: ADD AXIOS REQUEST HERE AND CLEAN IT UP FOR REACT USING THIS ITERATOR
  */

  return (
    <SectionList
      sections={response3}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Listing data={item} /> }
      renderSectionHeader={() => null}
    />
  );
}
//<View style={{ flexDirection: 'row' }}>
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
