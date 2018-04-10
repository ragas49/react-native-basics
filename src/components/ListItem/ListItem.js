import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const listItem = ({onPlaceSelect, placeImage, placeName}) => (
  <TouchableOpacity style={styles.listTouchable} onPress={onPlaceSelect}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.listImage}/>
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listTouchable: {
    width: '100%'
  },
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listImage: {
    width: 40,
    height: 40,
    marginRight: 10
  }
});

export default listItem;